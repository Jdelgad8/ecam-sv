const graphql = require('graphql');
const Acueducto = require('../models/acueducto');
const Impactos = require('../models/impactos');
const Encuestador = require('../models/encuestador');
const Encuesta = require('../models/encuesta');
const RecursoSuelo = require('../models/recurso-suelo');
const Tecnologia = require('../models/tecnologia');
const Vias = require('../models/vias');
const Educacion = require('../models/educacion');
const Comunicaciones = require('../models/comunicaciones');
const ServiciosBasicos = require('../models/servicios_basicos');
const Vivienda = require('../models/vivienda');
const Salud = require('../models/salud');
const ActividadesEconomicas = require('../models/actividades-economicas');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const EncuestadorType = new GraphQLObjectType({
  name: 'Encuestador',
  fields: () => ({
    id: { type: GraphQLID },
    nombres: { type: GraphQLString },
    apellidos: { type: GraphQLString },
    correo: { type: GraphQLString },
    password: { type: GraphQLString },
  })
});

const EncuestaType = new GraphQLObjectType({
  name: 'Encuesta',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuestador: { type: GraphQLID },
    nombre_encuestado: { type: GraphQLString },
    nombre_sitio: { type: GraphQLString },
    nicho_ambiente: { type: GraphQLString },
    empresa: { type: GraphQLString },
    sector_productivo: { type: GraphQLString },
    latitud: { type: GraphQLFloat },
    longitud: { type: GraphQLFloat },
    codigo_olc: { type: GraphQLInt },
    url: { type: GraphQLString },
    descripcion: { type: GraphQLString }
  })
});

const ImpactosType = new GraphQLObjectType({
  name: 'Impactos',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    impactos: { type: GraphQLString },
    magnitud_industrial: { type: GraphQLString },
    consecuencias_industrial: { type: GraphQLString },
    magnitud_comercial: { type: GraphQLString },
    consecuencias_comercial: { type: GraphQLString },
    magnitud_humano: { type: GraphQLString },
    consecuencias_humano: { type: GraphQLString },
  })
});

const RecursoSueloType = new GraphQLObjectType({
  name: 'RecursoSuelo',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    estacion: { type: GraphQLString },
    disponibilidad: { type: GraphQLString },
    area: { type: GraphQLFloat },
    calidad: { type: GraphQLString },
  })
})

const AcueductoType = new GraphQLObjectType({
  name: 'Acueducto',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    estacion_recurso: { type: GraphQLString },
    disponibilidad: { type: GraphQLString },
    cantidad: { type: GraphQLInt },
    requiere_tratamiento: { type: GraphQLString },
    fallos: { type: GraphQLString },
    perdidas: { type: GraphQLInt },
    danos: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    estacion: { type: GraphQLString },
    operacion: { type: GraphQLString },
    presupuesto: { type: GraphQLInt },
    poblacion_atendida: { type: GraphQLInt },
    cantidad_recursos: { type: GraphQLInt },
  })
});

const TecnologiaType = new GraphQLObjectType({
  name: 'Tecnologia',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    medio_transporte: { type: GraphQLString },
    cantidad: { type: GraphQLInt },
    personas_servidas: { type: GraphQLInt },
    cantidad_carga: { type: GraphQLInt },
    ano_fabricacion: { type: GraphQLInt },
    tipo_motor: { type: GraphQLString },
    impacto: { type: GraphQLString }
  })
});

const ViasType = new GraphQLObjectType({
  name: 'Vias',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    tipo_via: { type: GraphQLString },
    perdidas_monetarias: { type: GraphQLFloat },
    tiempo_desplazamiento: { type: GraphQLString },
    costo_desplazamiento: { type: GraphQLFloat },
    presenta: { type: GraphQLString },
    estacion: { type: GraphQLString },
    operacion: { type: GraphQLString },
    presupuesto: { type: GraphQLFloat },
    fuente: { type: GraphQLString },
    cantidad: { type: GraphQLInt },
    mes: { type: GraphQLString }
  })
});

const EducacionType = new GraphQLObjectType({
  name: 'Educacion',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    graduados_eduacion: { type: GraphQLInt },
    graduados_primaria: { type: GraphQLInt },
    graduados_secundaria: { type: GraphQLInt },
    graduados_tecnologia: { type: GraphQLInt },
    graduados_profesional: { type: GraphQLInt },
    graduados_especializacion: { type: GraphQLInt },
    graduados_doctorado: { type: GraphQLInt },
    curso_eduacion: { type: GraphQLInt },
    curso_primaria: { type: GraphQLInt },
    curso_secundaria: { type: GraphQLInt },
    curso_tecnologia: { type: GraphQLInt },
    curso_profesional: { type: GraphQLInt },
    curso_especializacion: { type: GraphQLInt },
    curso_doctorado: { type: GraphQLInt },
    requerimiento_eduacion: { type: GraphQLInt },
    requerimiento_primaria: { type: GraphQLInt },
    requerimiento_secundaria: { type: GraphQLInt },
    requerimiento_tecnologia: { type: GraphQLInt },
    requerimiento_profesional: { type: GraphQLInt },
    requerimiento_especializacion: { type: GraphQLInt },
    requerimiento_doctorado: { type: GraphQLInt },
    centros_escuela: { type: GraphQLInt },
    centros_colegio: { type: GraphQLInt },
    centros_instituto: { type: GraphQLInt },
    centros_universidad: { type: GraphQLInt },
    programas_escuela: { type: GraphQLInt },
    programas_colegio: { type: GraphQLInt },
    programas_instituto: { type: GraphQLInt },
    programas_universidad: { type: GraphQLInt },
    salones_escuela: { type: GraphQLInt },
    salones_colegio: { type: GraphQLInt },
    salones_instituto: { type: GraphQLInt },
    salones_universidad: { type: GraphQLInt },
    estudiantes_escuela: { type: GraphQLInt },
    estudiantes_colegio: { type: GraphQLInt },
    estudiantes_instituto: { type: GraphQLInt },
    estudiantes_universidad: { type: GraphQLInt }
  })
});

const ComunicacionesType = new GraphQLObjectType({
  name: 'Comunicaciones',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLString },
    internet: { type: GraphQLInt },
    celular: { type: GraphQLInt },
    habitaciones: { type: GraphQLInt },
    mas: { type: GraphQLString },
  })
});

const ServiciosBasicosType = new GraphQLObjectType({
  name: 'ServiciosBasicos',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    acceso: { type: GraphQLString },
    servicios: { type: GraphQLString },
    ambientales: { type: GraphQLString },
    conflicto_social: { type: GraphQLString },
    volatilidad: { type: GraphQLString },
    otro: { type: GraphQLString },
  })
});

const ViviendaType = new GraphQLObjectType({
  name: 'Vivienda',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    ambientales: { type: GraphQLString },
    conflicto_social: { type: GraphQLString },
    pobreza: { type: GraphQLString },
    otro: { type: GraphQLString },
    material_construccion: { type: GraphQLString },
    numero_personas: { type: GraphQLInt }
  })
});

const SaludType = new GraphQLObjectType({
  name: 'Salud',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    esperanza_vida: { type: GraphQLString },
    desnutricion: { type: GraphQLString },
    numero_visitas: { type: GraphQLInt },
    ano: { type: GraphQLInt },
    personas: { type: GraphQLInt },
    exposicion_impactos: { type: GraphQLString },
    conflicto_social: { type: GraphQLString },
    acceso_tierra: { type: GraphQLString },
    pobreza: { type: GraphQLString },
    desempleo: { type: GraphQLString },
  })
});

const ActividadesEconomicasType = new GraphQLObjectType({
  name: 'ActividadesEconomicas',
  fields: () => ({
    id: { type: GraphQLID },
    id_encuesta: { type: GraphQLID },
    industria: { type: GraphQLString },
    agricultura_opcion: { type: GraphQLString },
    agricultura_cantidad: { type: GraphQLString },
    servicios_opcion: { type: GraphQLString },
    servicios_cantidad: { type: GraphQLString },
    gobierno_opcion: { type: GraphQLString },
    gobierno_cantidad: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    encuestador: {
      type: EncuestadorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Encuestador.findById(args.id)
      }
    },
    encuestadores: {
      type: new GraphQLList(EncuestadorType),
      resolve(parent, args) {
        return Encuestador.find({});
      }
    },
    encuesta: {
      type: EncuestaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Encuesta.findById(args.id)
      }
    },
    encuestas: {
      type: new GraphQLList(EncuestaType),
      resolve(parent, args) {
        return Encuesta.find({});
      }
    },
    impacto: {
      type: ImpactosType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Impactos.findById(args.id)
      }
    },
    impactos: {
      type: new GraphQLList(ImpactosType),
      resolve(parent, args) {
        return Impactos.find({});
      }
    },
    recursoSuelo: {
      type: RecursoSueloType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return RecursoSuelo.findById(args.id)
      }
    },
    recursosSuelo: {
      type: new GraphQLList(RecursoSueloType),
      resolve(parent, args) {
        return RecursoSuelo.find({});
      }
    },
    acueducto: {
      type: AcueductoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Acueducto.findById(args.id)
      }
    },
    acueductos: {
      type: new GraphQLList(AcueductoType),
      resolve(parent, args) {
        return Acueducto.find({});
      }
    },
    tecnologia: {
      type: TecnologiaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Tecnologia.findById(args.id)
      }
    },
    tecnologias: {
      type: new GraphQLList(TecnologiaType),
      resolve(parent, args) {
        return Tecnologia.find({});
      }
    },
    via: {
      type: ViasType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Vias.findById(args.id)
      }
    },
    vias: {
      type: new GraphQLList(ViasType),
      resolve(parent, args) {
        return Vias.find({});
      }
    },
    educacion: {
      type: EducacionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Educacion.findById(args.id)
      }
    },
    educaciones: {
      type: new GraphQLList(EducacionType),
      resolve(parent, args) {
        return Educacion.find({});
      }
    },
    comunicacion: {
      type: ComunicacionesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comunicaciones.findById(args.id)
      }
    },
    comunicaciones: {
      type: new GraphQLList(ComunicacionesType),
      resolve(parent, args) {
        return Comunicaciones.find({});
      }
    },
    servicioBasico: {
      type: ServiciosBasicosType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ServiciosBasicos.findById(args.id)
      }
    },
    serviciosBasicos: {
      type: new GraphQLList(ServiciosBasicosType),
      resolve(parent, args) {
        return ServiciosBasicos.find({});
      }
    },
    vivienda: {
      type: ViviendaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Vivienda.findById(args.id)
      }
    },
    viviendas: {
      type: new GraphQLList(ViviendaType),
      resolve(parent, args) {
        return Vivienda.find({});
      }
    },
    salud: {
      type: SaludType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Salud.findById(args.id)
      }
    },
    saludes: {
      type: new GraphQLList(SaludType),
      resolve(parent, args) {
        return Salud.find({});
      }
    },
    actividadEconomica: {
      type: ActividadesEconomicasType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ActividadesEconomicas.findById(args.id)
      }
    },
    actividadesEconomicas: {
      type: new GraphQLList(ActividadesEconomicasType),
      resolve(parent, args) {
        return ActividadesEconomicas.find({});
      }
    },
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEncuestador: {
      type: EncuestadorType,
      args: {
        nombres: { type: GraphQLString },
        apellidos: { type: GraphQLString },
        correo: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        let encuestador = new Encuestador({
          nombres: args.nombres,
          apellidos: args.apellidos,
          correo: args.correo,
          password: args.password,
        });
        return encuestador.save();
      }
    },
    addEncuesta: {
      type: EncuestaType,
      args: {
        id_encuestador: { type: GraphQLString },
        nombre_encuestado: { type: GraphQLString },
        nombre_sitio: { type: GraphQLString },
        nicho_ambiente: { type: GraphQLString },
        empresa: { type: GraphQLString },
        sector_productivo: { type: GraphQLString },
        latitud: { type: GraphQLFloat },
        longitud: { type: GraphQLFloat },
        codigo_olc: { type: GraphQLInt },
        url: { type: GraphQLString },
        descripcion: { type: GraphQLString },
      },
      resolve(parent, args) {
        let encuesta = new Encuesta({
          id_encuestador: args.id_encuestador,
          nombre_encuestado: args.nombre_encuestado,
          nombre_sitio: args.nombre_sitio,
          nicho_ambiente: args.nicho_ambiente,
          empresa: args.empresa,
          sector_productivo: args.sector_productivo,
          latitud: args.latitud,
          longitud: args.longitud,
          codigo_olc: args.codigo_olc,
          url: args.url,
          descripcion: args.descripcion,
        });
        return encuesta.save();
      }
    },
    addImpactos: {
      type: ImpactosType,
      args: {
        id_encuesta: { type: GraphQLString },
        impactos: { type: GraphQLString },
        magnitud_industrial: { type: GraphQLString },
        consecuencias_industrial: { type: GraphQLString },
        magnitud_comercial: { type: GraphQLString },
        consecuencias_comercial: { type: GraphQLString },
        magnitud_humano: { type: GraphQLString },
        consecuencias_humano: { type: GraphQLString },
      },
      resolve(parent, args) {
        let impactos = new Impactos({
          id_encuesta: args.id_encuesta,
          impactos: args.impactos,
          magnitud_industrial: args.magnitud_industrial,
          consecuencias_industrial: args.consecuencias_industrial,
          magnitud_comercial: args.magnitud_comercial,
          consecuencias_comercial: args.consecuencias_comercial,
          magnitud_humano: args.magnitud_humano,
          consecuencias_humano: args.consecuencias_humano,
        });
        return impactos.save();
      }
    },
    addRecursoSuelo: {
      type: RecursoSueloType,
      args: {
        id_encuesta: { type: GraphQLString },
        estacion: { type: GraphQLString },
        disponibilidad: { type: GraphQLString },
        area: { type: GraphQLFloat },
        calidad: { type: GraphQLString },
      },
      resolve(parent, args) {
        let recursoSuelo = new RecursoSuelo({
          id_encuesta: args.id_encuesta,
          estacion: args.estacion,
          disponibilidad: args.disponibilidad,
          area: args.area,
          calidad: args.calidad,
        });
        return recursoSuelo.save();
      }
    },
    addAcueducto: {
      type: AcueductoType,
      args: {
        id_encuesta: { type: GraphQLString },
        estacion_recurso: { type: GraphQLString },
        disponibilidad: { type: GraphQLString },
        cantidad: { type: GraphQLInt },
        requiere_tratamiento: { type: GraphQLString },
        fallos: { type: GraphQLString },
        perdidas: { type: GraphQLInt },
        danos: { type: GraphQLString },
        descripcion: { type: GraphQLString },
        estacion: { type: GraphQLString },
        operacion: { type: GraphQLString },
        presupuesto: { type: GraphQLInt },
        poblacion_atendida: { type: GraphQLInt },
        cantidad_recursos: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let acueducto = new Acueducto({
          id_encuesta: args.id_encuesta,
          estacion_recurso: args.estacion_recurso,
          disponibilidad: args.disponibilidad,
          cantidad: args.cantidad,
          requiere_tratamiento: args.requiere_tratamiento,
          fallos: args.fallos,
          perdidas: args.perdidas,
          danos: args.danos,
          descripcion: args.descripcion,
          estacion: args.estacion,
          operacion: args.operacion,
          presupuesto: args.presupuesto,
          poblacion_atendida: args.poblacion_atendida,
          cantidad_recursos: args.cantidad_recursos,
        });
        return acueducto.save();
      }
    },
    addTecnologia: {
      type: TecnologiaType,
      args: {
        id_encuesta: { type: GraphQLString },
        medio_transporte: { type: GraphQLString },
        cantidad: { type: GraphQLInt },
        personas_servidas: { type: GraphQLInt },
        cantidad_carga: { type: GraphQLInt },
        ano_fabricacion: { type: GraphQLInt },
        tipo_motor: { type: GraphQLString },
        impacto: { type: GraphQLString }
      },
      resolve(parent, args) {
        let tecnologia = new Tecnologia({
          id_encuesta: args.id_encuesta,
          medio_transporte: args.medio_transporte,
          cantidad: args.cantidad,
          personas_servidas: args.personas_servidas,
          cantidad_carga: args.cantidad_carga,
          ano_fabricacion: args.ano_fabricacion,
          tipo_motor: args.tipo_motor,
          impacto: args.impacto,
        });
        return tecnologia.save();
      }
    },
    addVias: {
      type: ViasType,
      args: {
        id_encuesta: { type: GraphQLString },
        tipo_via: { type: GraphQLString },
        perdidas_monetarias: { type: GraphQLFloat },
        tiempo_desplazamiento: { type: GraphQLString },
        costo_desplazamiento: { type: GraphQLFloat },
        presenta: { type: GraphQLString },
        estacion: { type: GraphQLString },
        operacion: { type: GraphQLString },
        presupuesto: { type: GraphQLFloat },
        fuente: { type: GraphQLString },
        cantidad: { type: GraphQLInt },
        mes: { type: GraphQLString }
      },
      resolve(parent, args) {
        let vias = new Vias({
          id_encuesta: args.id_encuesta,
          tipo_via: args.tipo_via,
          perdidas_monetarias: args.perdidas_monetarias,
          tiempo_desplazamiento: args.tiempo_desplazamiento,
          costo_desplazamiento: args.costo_desplazamiento,
          presenta: args.presenta,
          estacion: args.estacion,
          operacion: args.operacion,
          presupuesto: args.presupuesto,
          fuente: args.fuente,
          cantidad: args.cantidad,
          mes: args.mes,
        });
        return vias.save();
      }
    },
    addEducacion: {
      type: EducacionType,
      args: {
        id_encuesta: { type: GraphQLString },
        graduados_eduacion: { type: GraphQLInt },
        graduados_primaria: { type: GraphQLInt },
        graduados_secundaria: { type: GraphQLInt },
        graduados_tecnologia: { type: GraphQLInt },
        graduados_profesional: { type: GraphQLInt },
        graduados_especializacion: { type: GraphQLInt },
        graduados_doctorado: { type: GraphQLInt },
        curso_eduacion: { type: GraphQLInt },
        curso_primaria: { type: GraphQLInt },
        curso_secundaria: { type: GraphQLInt },
        curso_tecnologia: { type: GraphQLInt },
        curso_profesional: { type: GraphQLInt },
        curso_especializacion: { type: GraphQLInt },
        curso_doctorado: { type: GraphQLInt },
        requerimiento_eduacion: { type: GraphQLInt },
        requerimiento_primaria: { type: GraphQLInt },
        requerimiento_secundaria: { type: GraphQLInt },
        requerimiento_tecnologia: { type: GraphQLInt },
        requerimiento_profesional: { type: GraphQLInt },
        requerimiento_especializacion: { type: GraphQLInt },
        requerimiento_doctorado: { type: GraphQLInt },
        centros_escuela: { type: GraphQLInt },
        centros_colegio: { type: GraphQLInt },
        centros_instituto: { type: GraphQLInt },
        centros_universidad: { type: GraphQLInt },
        programas_escuela: { type: GraphQLInt },
        programas_colegio: { type: GraphQLInt },
        programas_instituto: { type: GraphQLInt },
        programas_universidad: { type: GraphQLInt },
        salones_escuela: { type: GraphQLInt },
        salones_colegio: { type: GraphQLInt },
        salones_instituto: { type: GraphQLInt },
        salones_universidad: { type: GraphQLInt },
        estudiantes_escuela: { type: GraphQLInt },
        estudiantes_colegio: { type: GraphQLInt },
        estudiantes_instituto: { type: GraphQLInt },
        estudiantes_universidad: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let educacion = new Educacion({
          id_encuesta: args.id_encuesta,
          graduados_eduacion: args.graduados_eduacion,
          graduados_primaria: args.graduados_primaria,
          graduados_secundaria: args.graduados_secundaria,
          graduados_tecnologia: args.graduados_tecnologia,
          graduados_profesional: args.graduados_profesional,
          graduados_especializacion: args.graduados_especializacion,
          graduados_doctorado: args.graduados_doctorado,
          curso_eduacion: args.curso_eduacion,
          curso_primaria: args.curso_primaria,
          curso_secundaria: args.curso_secundaria,
          curso_tecnologia: args.curso_tecnologia,
          curso_profesional: args.curso_profesional,
          curso_especializacion: args.curso_especializacion,
          curso_doctorado: args.curso_doctorado,
          requerimiento_eduacion: args.requerimiento_eduacion,
          requerimiento_primaria: args.requerimiento_primaria,
          requerimiento_secundaria: args.requerimiento_secundaria,
          requerimiento_tecnologia: args.requerimiento_tecnologia,
          requerimiento_profesional: args.requerimiento_profesional,
          requerimiento_especializacion: args.requerimiento_especializacion,
          requerimiento_doctorado: args.requerimiento_doctorado,
          centros_escuela: args.centros_escuela,
          centros_colegio: args.centros_colegio,
          centros_instituto: args.centros_instituto,
          centros_universidad: args.centros_universidad,
          programas_escuela: args.programas_escuela,
          programas_colegio: args.programas_colegio,
          programas_instituto: args.programas_instituto,
          programas_universidad: args.programas_universidad,
          salones_escuela: args.salones_escuela,
          salones_colegio: args.salones_colegio,
          salones_instituto: args.salones_instituto,
          salones_universidad: args.salones_universidad,
          estudiantes_escuela: args.estudiantes_escuela,
          estudiantes_colegio: args.estudiantes_colegio,
          estudiantes_instituto: args.estudiantes_instituto,
          estudiantes_universidad: args.estudiantes_universidad,
        });
        return educacion.save();
      }
    },
    addComunicaciones: {
      type: ComunicacionesType,
      args: {
        id_encuesta: { type: GraphQLString },
        internet: { type: GraphQLInt },
        celular: { type: GraphQLInt },
        habitaciones: { type: GraphQLInt },
        mas: { type: GraphQLString },
      },
      resolve(parent, args) {
        let comunicaciones = new Comunicaciones({
          id_encuesta: args.id_encuesta,
          internet: args.internet,
          celular: args.celular,
          habitaciones: args.habitaciones,
          mas: args.mas,
        });
        return comunicaciones.save();
      }
    },
    addServiciosBasicos: {
      type: ServiciosBasicosType,
      args: {
        id_encuesta: { type: GraphQLString },
        acceso: { type: GraphQLString },
        servicios: { type: GraphQLString },
        ambientales: { type: GraphQLString },
        conflicto_social: { type: GraphQLString },
        volatilidad: { type: GraphQLString },
        otro: { type: GraphQLString }
      },
      resolve(parent, args) {
        let serviciosBasicos = new ServiciosBasicos({
          id_encuesta: args.id_encuesta,
          acceso: args.acceso,
          servicios: args.servicios,
          ambientales: args.ambientales,
          conflicto_social: args.conflicto_social,
          volatilidad: args.volatilidad,
          otro: args.otro,
        });
        return serviciosBasicos.save();
      }
    },
    addVivienda: {
      type: ViviendaType,
      args: {
        id_encuesta: { type: GraphQLString },
        ambientales: { type: GraphQLString },
        conflicto_social: { type: GraphQLString },
        pobreza: { type: GraphQLString },
        otro: { type: GraphQLString },
        material_construccion: { type: GraphQLString },
        numero_personas: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let vivienda = new Vivienda({
          id_encuesta: args.id_encuesta,
          ambientales: args.ambientales,
          conflicto_social: args.conflicto_social,
          pobreza: args.pobreza,
          otro: args.otro,
          material_construccion: args.material_construccion,
          numero_personas: args.numero_personas,
        });
        return vivienda.save();
      }
    },
    addSalud: {
      type: SaludType,
      args: {
        id_encuesta: { type: GraphQLString },
        esperanza_vida: { type: GraphQLString },
        desnutricion: { type: GraphQLString },
        numero_visitas: { type: GraphQLInt },
        ano: { type: GraphQLInt },
        personas: { type: GraphQLInt },
        exposicion_impactos: { type: GraphQLString },
        conflicto_social: { type: GraphQLString },
        acceso_tierra: { type: GraphQLString },
        pobreza: { type: GraphQLString },
        desempleo: { type: GraphQLString },
      },

      resolve(parent, args) {
        let salud = new Salud({
          id_encuesta: args.id_encuesta,
          esperanza_vida: args.esperanza_vida,
          desnutricion: args.desnutricion,
          numero_visitas: args.numero_visitas,
          ano: args.ano,
          personas: args.personas,
          exposicion_impactos: args.exposicion_impactos,
          conflicto_social: args.conflicto_social,
          acceso_tierra: args.acceso_tierra,
          pobreza: args.pobreza,
          desempleo: args.desempleo,
        });
        return salud.save();
      }
    },
    addActividadesEconomicas: {
      type: ActividadesEconomicasType,
      args: {
        id_encuesta: { type: GraphQLString },
        industria: { type: GraphQLString },
        agricultura_opcion: { type: GraphQLString },
        agricultura_cantidad: { type: GraphQLString },
        servicios_opcion: { type: GraphQLString },
        servicios_cantidad: { type: GraphQLString },
        gobierno_opcion: { type: GraphQLString },
        gobierno_cantidad: { type: GraphQLString },
      },
      resolve(parent, args) {
        let actividadesEconomicas = new ActividadesEconomicas({
          id_encuesta: args.id_encuesta,
          industria: args.industria,
          agricultura_opcion: args.agricultura_opcion,
          agricultura_cantidad: args.agricultura_cantidad,
          servicios_opcion: args.servicios_opcion,
          servicios_cantidad: args.servicios_cantidad,
          gobierno_opcion: args.gobierno_opcion,
          gobierno_cantidad: args.gobierno_cantidad,
        });
        return actividadesEconomicas.save();
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
