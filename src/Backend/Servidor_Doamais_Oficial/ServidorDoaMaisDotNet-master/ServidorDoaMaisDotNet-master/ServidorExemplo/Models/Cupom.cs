using MySqlX.XDevAPI;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServidorExemplo.Models
{
    
        public class Cupom
        {
            [Key] // Define id_cupom como chave primária
            public int id_cupom { get; set; }
            public DateTime data_envio { get; set; }
            public string ong_beneficiada { get; set; }
            public double valor_cupom { get; set; }
            public string email { get; set; }
        
    }
    }
