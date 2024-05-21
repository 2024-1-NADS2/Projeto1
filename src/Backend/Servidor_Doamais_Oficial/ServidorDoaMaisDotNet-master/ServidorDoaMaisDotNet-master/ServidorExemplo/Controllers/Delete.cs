using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServidorExemplo.Models;
using ServidorExemplo.Data;
using System;
using System.Threading.Tasks;
using MySqlConnector;
using System.Diagnostics;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeleteController : ControllerBase
    {
        private readonly ApiContext _context;

        public DeleteController(ApiContext context)
        {
            _context = context;
        }

        // DELETE: api/Delete/5
        [HttpDelete]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            try
            {
                var rowCount = await DeleteUsuarioFromDatabase(id);
                if (rowCount == 0)
                    return NotFound("Usuário não encontrado.");

                return Ok("Usuário deletado com sucesso.");
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Erro ao deletar usuário: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao deletar usuário: {ex.Message}");
            }
        }

        private async Task<int> DeleteUsuarioFromDatabase(int id_usuario)
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
                    command.CommandText = @"DELETE FROM usuarios WHERE id_usuario = @id";
                    command.Parameters.AddWithValue("@id", id_usuario);

                    int rowCount = await command.ExecuteNonQueryAsync();
                    return rowCount;
                }
            }
        }
    }
}
