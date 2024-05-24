using Microsoft.EntityFrameworkCore;
using ServidorExemplo.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase("ServidorDB"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(op => {
    // CORS policy for the React application running locally
    op.AddPolicy("ApiIntellectify", policyBuilder => {
        policyBuilder.WithOrigins("http://localhost/")  // Remove trailing slash
                     .AllowAnyHeader()
                     .AllowAnyMethod()  // Allow any HTTP method
                     .AllowCredentials();
    });
});


var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
if (app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("ApiIntellectify");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
