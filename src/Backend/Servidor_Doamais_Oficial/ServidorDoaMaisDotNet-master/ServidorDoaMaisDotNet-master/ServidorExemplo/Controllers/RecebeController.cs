using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using Microsoft.AspNetCore.Http;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecebeController : ControllerBase
    {
        private readonly ApiContext _context;

        public RecebeController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost("AdicionarRecebe")]
        public async Task<IActionResult> AdicionarRecebe([FromBody] Recebe recebe)
        {
            try
            {
                if (recebe == null)
                {
                    return BadRequest("O corpo da requisição não pode ser nulo.");
                }
                if (!await EmailExists(recebe.email))
                {
                    return BadRequest("O email fornecido não está registrado na base de dados.");
                }

                if (!await OngExists(recebe.nome_ong))
                {
                    return BadRequest("A ONG fornecida não está registrada na base de dados.");
                }

                var builder = new MySqlConnectionStringBuilder
                {
                    Server = "doamaisbd.mysql.database.azure.com",
                    Database = "doamais",
                    UserID = "doamaisadmin",
                    Password = "ChargeBack2nads",
                    SslMode = MySqlSslMode.Required
                };

                using (var conn = new MySqlConnection(builder.ConnectionString))
                {
                    await conn.OpenAsync();

                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO recebe (documento, email, nome_ong) 
                                                VALUES (@documento, @Email, @NomeOng)";

                        command.Parameters.AddWithValue("@documento", recebe.documento);
                        command.Parameters.AddWithValue("@Email", recebe.email);
                        command.Parameters.AddWithValue("@NomeOng", recebe.nome_ong);

                        int rowCount = await command.ExecuteNonQueryAsync();
                        Debug.WriteLine($"Number of rows inserted = {rowCount}");
                    }
                }
                if (recebe.id_documento == 0)
                {
                    _context.recebe.Add(recebe);
                }

                _context.recebe.Add(recebe);
                await _context.SaveChangesAsync();

                return Ok("Registro adicionado com sucesso.");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                Debug.WriteLine($"Error in AdicionarRecebe: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro ao adicionar o registro.");
            }
        }
        private async Task<bool> EmailExists(string email)
        {
            try
            {
                // Construir a conexão com o banco de dados
                var builder = new MySqlConnectionStringBuilder
                {
                    Server = "doamaisbd.mysql.database.azure.com",
                    Database = "doamais",
                    UserID = "doamaisadmin",
                    Password = "ChargeBack2nads",
                    SslMode = MySqlSslMode.Required
                };

                // Abrir conexão com o banco de dados
                using (var conn = new MySqlConnection(builder.ConnectionString))
                {
                    await conn.OpenAsync();

                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"SELECT COUNT(*) FROM usuarios WHERE email = @Email";
                        command.Parameters.AddWithValue("@Email", email);

                        // Executar a consulta e retornar verdadeiro se o email existir
                        var result = await command.ExecuteScalarAsync();
                        return Convert.ToInt32(result) > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ocorreu um erro ao verificar o email no banco de dados:");
                Console.WriteLine(ex.ToString());
                Debug.WriteLine($"Error in EmailExists: {ex.Message}");
                throw; // Lançar a exceção para que seja tratada pelo código que chama este método
            }
        }

        private async Task<bool> OngExists(string nome_ong)
        {
            var builder = new MySqlConnectionStringBuilder
            {
                Server = "doamaisbd.mysql.database.azure.com",
                Database = "doamais",
                UserID = "doamaisadmin",
                Password = "ChargeBack2nads",
                SslMode = MySqlSslMode.Required
            };

            try
            {
                using (var conn = new MySqlConnection(builder.ConnectionString))
                {
                    await conn.OpenAsync();

                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"SELECT COUNT(*) FROM ongs WHERE nome_ong = @NomeOng";
                        command.Parameters.AddWithValue("@NomeOng", nome_ong);

                        var result = await command.ExecuteScalarAsync();
                        return Convert.ToInt32(result) > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Error in OngExists: {ex.Message}");
                throw;
            }
        }
    }
}
