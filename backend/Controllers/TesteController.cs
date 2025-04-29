using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]

public class TesteController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() 
    {
        return Ok("Teste concluido");
    }
}