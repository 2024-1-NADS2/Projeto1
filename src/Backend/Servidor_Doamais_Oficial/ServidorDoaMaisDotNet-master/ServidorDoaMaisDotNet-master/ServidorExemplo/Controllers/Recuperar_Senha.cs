using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using ServidorExemplo.Data;
using ServidorExemplo.Models;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;

namespace ServidorExemplo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Recuperar_Senha : ControllerBase
    {
        private readonly ApiContext _context;

        public Recuperar_Senha(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> RecuperarSenha([FromBody] Models.Login model)
        {
            try
            {
                
                if (string.IsNullOrEmpty(model.email))
                    return BadRequest("O email é obrigatório.");

                
                if (!IsStrongPassword(model.senha))
                {
                    return BadRequest("A senha fornecida não é segura. Por favor, escolha uma senha que contenha pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
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

                    
                    if (!await EmailExists(model.email))
                    {
                        return BadRequest("O email fornecido não está registrado na base de dados.");
                    }

                    
                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"UPDATE usuarios SET senha = @novaSenha WHERE email = @email";
                        command.Parameters.AddWithValue("@novaSenha", model.senha);
                        command.Parameters.AddWithValue("@email", model.email);

                        int rowCount = await command.ExecuteNonQueryAsync();
                        Debug.WriteLine($"Número de linhas atualizadas: {rowCount}");

                        return Ok("Nova senha definida com sucesso.");
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Erro ao recuperar senha: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao recuperar senha: {ex.Message}");
            }
        }

        private bool IsStrongPassword(string password)
        {
            // Verificar se a senha tem pelo menos 8 caracteres
            if (password.Length < 8)
            {
                return false;
            }

            // Verificar se a senha contém letras maiúsculas, minúsculas, números e caracteres especiais
            if (!password.Any(char.IsUpper) || !password.Any(char.IsLower) || !password.Any(char.IsDigit))
            {
                return false;
            }

            return true;
        }

        private async Task<bool> EmailExists(string email)
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
                        command.CommandText = @"SELECT COUNT(*) FROM usuarios WHERE email = @Email";
                        command.Parameters.AddWithValue("@Email", email);

                        var result = await command.ExecuteScalarAsync();
                        return Convert.ToInt32(result) > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Error in EmailExists: {ex.Message}");
                throw; // Rethrow the exception for handling by the caller
            }
        }
    }
}
