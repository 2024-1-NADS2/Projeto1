using System.ComponentModel.DataAnnotations;

namespace ServidorExemplo.Models
{
    public class Ong
    {
        public int id_ong { get; set; }

        [Key]
        [Required]
        public string nome_ong { get; set; }

        [Required]
        public string senha { get; set; }

        [Required]
        public string cnpj { get; set; }

        [Required]
        
        public string email { get; set; }

        [Required]
        
        public string telefone { get; set; }
    }
}
