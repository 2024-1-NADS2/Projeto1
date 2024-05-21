using System.ComponentModel.DataAnnotations;

namespace ServidorExemplo.Models
{
    public class Usuario
    {
        public int ID { get; set; }
        public string nome { get; set; }
        public string senha { get; set; }
        [Key]
        public string email { get; set; }
        public string telefone { get; set; }
        public int  tipo_pessoa { get; set;}


    }
}
