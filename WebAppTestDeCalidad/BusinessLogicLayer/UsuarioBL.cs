using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer;

namespace BusinessLogicLayer
{
    public class UsuarioBL
    {
        ConexionDA objDatos = new ConexionDA();
        public DataTable ListadoBL()
        {
            return objDatos.ListadoDA();
        }
    }
}
