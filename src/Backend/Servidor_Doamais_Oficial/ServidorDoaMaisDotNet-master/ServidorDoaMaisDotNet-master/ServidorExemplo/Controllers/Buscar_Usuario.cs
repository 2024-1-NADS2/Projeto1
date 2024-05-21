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
    public class Buscar_Usuario : ControllerBase
    {
        private readonly ApiContext _context;

        public Buscar_Usuario(ApiContext context)
        {
            _context = context;
        }

        // DELETE: api/Delete/5
        [HttpGet]
        public async Task<IActionResult> GetUsuario(int id)
        {
            try
            {
                var usuario = await GetUsuarioFromDatabase(id);
                if (usuario == null)
                    return NotFound("Usuário não encontrado.");

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Erro ao buscar usuário: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao buscar usuário: {ex.Message}");
            }
        }

        private async Task<Usuario> GetUsuarioFromDatabase(int id_usuario)
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
                    command.CommandText = @"SELECT id_usuario, nome, senha, email, telefone, tipo_pessoa FROM usuarios WHERE id_usuario = @id";
                    command.Parameters.AddWithValue("@id", id_usuario);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            return new Usuario
                            {
                                ID = reader.GetInt32("id_usuario"),
                                nome = reader.GetString("nome"),
                                email = reader.GetString("email"),
                                tipo_pessoa = reader.GetInt32("tipo_pessoa"),
                                senha = reader.GetString("senha"),
                                telefone = reader.GetString("telefone")


                            };
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }
    }
}