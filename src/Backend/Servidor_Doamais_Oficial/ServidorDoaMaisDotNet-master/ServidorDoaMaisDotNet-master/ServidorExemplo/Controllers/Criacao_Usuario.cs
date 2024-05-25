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
    public class Criacao_Usuario : Controller
    {
        private readonly ApiContext _context;

        public Criacao_Usuario(ApiContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<IActionResult> CriarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                // Verificar se a senha fornecida é segura
                if (!IsStrongPassword(usuario.senha))
                {
                    return BadRequest("A senha fornecida não é segura. Por favor, escolha uma senha que contenha pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
                }

                // Verificar se o email fornecido é válido
                if (!IsValidEmail(usuario.email))
                {
                    return BadRequest("O email fornecido não é válido.");
                }

                // Verificar se o número de telefone fornecido é válido
                if (!IsPhoneNumberValid(usuario.telefone))
                {
                    return BadRequest("O número de telefone fornecido não é válido. Por favor, insira um número de telefone com 11 dígitos ou 9 dígitos.");
                }
                if (usuario.tipo_pessoa != 0 && usuario.tipo_pessoa != 1)
                {
                    return BadRequest("TipoPessoa deve ser  0(CPF) ou  1(CNPJ)");
                }

                var builder = new MySqlConnectionStringBuilder { Server = "doamaisbd.mysql.database.azure.com", Database = "doamais", UserID = "doamaisadmin", Password = "ChargeBack2nads", SslMode = MySqlSslMode.Required };

                using (var conn = new MySqlConnection(builder.ConnectionString))
                {
                    await conn.OpenAsync();

                    using (var command = conn.CreateCommand())
                    {
                        command.CommandText = @"INSERT INTO usuarios ( nome, senha, email, telefone, tipo_pessoa) 
                                        VALUES ( @nome, @senha, @email, @telefone, @tipo_pessoa)";
                        
                        command.Parameters.AddWithValue("@nome", usuario.nome);
                        command.Parameters.AddWithValue("@senha", usuario.senha);
                        command.Parameters.AddWithValue("@email", usuario.email);
                        command.Parameters.AddWithValue("@telefone", usuario.telefone);
                        command.Parameters.AddWithValue("@tipo_pessoa", usuario.tipo_pessoa);

                        int rowCount = await command.ExecuteNonQueryAsync();
                        Debug.Write($"Number of rows inserted={rowCount}");
                    }
                }

                // Se ID for 0, é um novo usuário; caso contrário, é uma atualização
                if (usuario.ID == 0)
                {
                    _context.usuarios.Add(usuario);
                }
              
                await _context.SaveChangesAsync();
                return Ok("Usuário criado com sucesso.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Passei por aqui ");
                Console.WriteLine(ex.ToString());
                Debug.WriteLine($"Error in CriarUsuario: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError);
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
        private bool IsValidEmail(string email)
        {
            try
            {
                var emailAddress = new MailAddress(email);
                return true;
            }
            catch
            {
                return false;
            }
        }
        private bool IsPhoneNumberValid(string telefone)
        {
            // Remover quaisquer caracteres não numéricos do número de telefone
            string telefone2 = new string(telefone.Where(char.IsDigit).ToArray());

            // Verificar se o número de telefone tem 11 dígitos
            return telefone2.Length == 11 || telefone2.Length == 9;
        }
    }
}
