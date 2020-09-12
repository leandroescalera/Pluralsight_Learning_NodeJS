using System;

namespace BusinessEntityLayer
{
    public class UsuarioBE
    {
        public int id_usuario { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string estado { get; set; }
        public DateTime fecha_ultimo_acceso { get; set; }
        public DateTime fecha_registro { get; set; }
        public string usuario_registro { get; set; }
        public DateTime fecha_modificacion { get; set; }
        public string usuario_modificacion { get; set; }
        public bool activo { get; set; }
    }
}
