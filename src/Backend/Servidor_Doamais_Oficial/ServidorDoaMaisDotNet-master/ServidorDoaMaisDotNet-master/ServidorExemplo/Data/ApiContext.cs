using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Models;

namespace ServidorExemplo.Data
{
    public class ApiContext : DbContext
    {
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Cupom> cupons { get; set; }
        public DbSet<Ong> ongs { get; set; }
        public DbSet<Recebe> recebe { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

        
        }
    }
}
