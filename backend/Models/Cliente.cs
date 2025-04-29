using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Cliente 
{
    [Required]
    [Key]
    public string? Cpf { get; set; }

    [Required]
    public string? Nome { get; set; }
    [Required]
    public string? Sobrenome { get; set; }
    [Required]
    public string? Email { get; set; }
    [Required]
    public DateOnly DataNascimento { get; set; }

    
}