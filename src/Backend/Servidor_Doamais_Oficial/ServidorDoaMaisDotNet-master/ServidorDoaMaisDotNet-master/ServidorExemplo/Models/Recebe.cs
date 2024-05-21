using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServidorExemplo.Models
{
    public class Recebe
    {
        [Key]
        public int id_documento { get; set; }

        [Required]
        public string documento { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string nome_ong { get; set; }
    }
}
