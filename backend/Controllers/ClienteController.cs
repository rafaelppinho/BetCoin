using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ClienteController : ControllerBase
{
    private static List<Cliente> _clientes = new List<Cliente>();
    [HttpPost]
    public IActionResult Create([FromBody]Cliente cliente) {
        _clientes.Add(cliente);
        return Created("", cliente);
    }

    [HttpGet]
    public IActionResult GetAll() {
        return Ok(_clientes);
    }
}