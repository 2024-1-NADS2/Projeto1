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
using System.Net.Mail;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Login : Controller
    {
        private readonly ApiContext _context;

        public Login(ApiContext context)
        {
            _context = context;
        }

        

        [HttpPost]
        public async Task<IActionResult> Login1([FromBody] Models.Login model)
        {
            try
            {
 

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
                        command.CommandText = @"SELECT id_usuario, nome, senha, email, telefone, tipo_pessoa 
                                        FROM usuarios 
                                        WHERE email = @Email";
                        command.Parameters.AddWithValue("@Email", model.email);

                        using (var reader = await command.ExecuteReaderAsync())
                        {
                            if (await reader.ReadAsync())
                            {
                                var storedPassword = reader["senha"].ToString();

                                // Verificar se a senha fornecida corresponde à senha armazenada
                                if (storedPassword == model.senha)
                                {
                                    // Autenticação bem-sucedida
                                    return Ok("Login realizado com sucesso.");
                                }
                                else
                                {
                                    // Senha incorreta
                                    return Unauthorized("Senha incorreta.");
                                }
                            }
                            else
                            {
                                // Usuário não encontrado
                                return NotFound("Usuário não encontrado.");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                Debug.WriteLine($"Error in Login: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
