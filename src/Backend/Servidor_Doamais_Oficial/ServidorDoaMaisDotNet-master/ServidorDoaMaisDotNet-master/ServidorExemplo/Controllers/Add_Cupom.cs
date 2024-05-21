using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Add_Cupom : ControllerBase
    {
        private readonly ApiContext _context;

        public Add_Cupom(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarCupom([FromBody] Cupom cupom)
        {
            try
            {


                // Verificar se o valor do cupom é válido
                if (cupom.valor_cupom <= 0)
                {
                    return BadRequest("O valor do cupom deve ser maior que zero.");
                }

                // Verificar se o email fornecido existe na tabela Usuarios
                if (!await EmailExists(cupom.email))
                {
                    return BadRequest("O email fornecido não está registrado na base de dados.");
                }

                // Construir a conexão com o banco de dados
                var builder = new MySqlConnectionStringBuilder
                {
                    Server = "doamaisbd.mysql.database.azure.com",
                    Database = "doamais",
                    UserID = "doamaisadmin",
                    Password = "ChargeBack2nads",
                    SslMode = MySqlSslMode.Required
                };

                // Inserir cupom na tabela 'cupons'
                using (var conn = new MySqlConnection(builder.ConnectionString))
                {
                    await conn.OpenAsync();

                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO cupons (data_envio, ong_beneficiada, valor_cupom, email) 
                                               VALUES (@data_envio, @ong_beneficiada, @valor_cupom, @email)";

                        command.Parameters.AddWithValue("@data_envio", cupom.data_envio);
                        command.Parameters.AddWithValue("@ong_beneficiada", cupom.ong_beneficiada ?? "");
                        command.Parameters.AddWithValue("@valor_cupom", cupom.valor_cupom);
                        command.Parameters.AddWithValue("@email", cupom.email);

                        int rowCount = await command.ExecuteNonQueryAsync();
                        Debug.WriteLine($"Number of rows inserted={rowCount}");
                    }
                }

                // Adicionar cupom ao contexto local (se o ID for 0, é um novo cupom)
                if (cupom.id_cupom == 0)
                {
                    _context.cupons.Add(cupom);
                }

                // Salvar mudanças no contexto
                await _context.SaveChangesAsync();

                return Ok("Cupom adicionado com sucesso.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ocorreu um erro ao adicionar o cupom:");
                Console.WriteLine(ex.ToString());
                Debug.WriteLine($"Error in AdicionarCupom: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError);
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

    }
}
