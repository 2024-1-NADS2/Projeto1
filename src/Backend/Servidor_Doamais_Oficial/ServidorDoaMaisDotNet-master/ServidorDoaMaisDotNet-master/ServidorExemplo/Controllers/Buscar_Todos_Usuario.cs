using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;
using System.Data;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Buscar_Todos_Usuario : ControllerBase
    {
        private readonly ApiContext _context;

        public Buscar_Todos_Usuario(ApiContext context)
        {
            _context = context;
        }

        // DELETE: api/Delete/5
        [HttpGet]
        public async Task<IActionResult> GetTodosUsuarios()
        {
            try
            {
                var usuarios = await GetTodosUsuariosFromDatabase();
                return Ok(usuarios);
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Erro ao buscar usuários: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao buscar usuários: {ex.Message}");
            }
        }

        private async Task<List<Usuario>> GetTodosUsuariosFromDatabase()
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
                    command.CommandText = @"SELECT id_usuario, nome, senha, email, telefone, tipo_pessoa FROM usuarios";

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        var usuarios = new List<Usuario>();
                        while (await reader.ReadAsync())
                        {
                            usuarios.Add(new Usuario
                            {
                                ID = reader.GetInt32("id_usuario"),
                                nome = reader.GetString("nome"),
                                email = reader.GetString("email"),
                                tipo_pessoa = reader.GetInt32("tipo_pessoa"),
                                senha = reader.GetString("senha"),
                                telefone = reader.GetString("telefone")

                            });
                        }
                        return usuarios;
                    }
                }
            }
        
        }
    }
}