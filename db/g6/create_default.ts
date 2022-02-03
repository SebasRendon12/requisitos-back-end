import { QueryTypes } from "sequelize"
import { funcionario } from "../../models/entities"
import db from "../connection"

const apoyo:string = `INSERT IGNORE INTO apoyo_socioeconomico (apoyo_socioeconomico,estado) values 
('Alimentario',true),('Alojamiento',true);`

const roles:string = `INSERT INTO rol (rol,descripcion) values
('Admin', 'Super user'),('Dirección nacional admisiones','Encargados de el proceso de evaluacion y calificacion de los que serán estudiantes'),('Registro y matricula','Encargados de el proceso de inscripción del estudiante'),('Gestion y fomento socioeconimico','Encargados de el proceso de inscripción de apoyos socioeconimicos a los estudiantes');`

const estado:string = `insert into estado (estado,descripcion) values
('Activo','El usuario está activo en el sistema'),('Incativo','El usuario está inactivo en el sistema'),('Congelado','El usuario está congelado en el sistema');`

const departamento:string = `INSERT INTO departamento (departamento) VALUES 
('Amazonas'),('Antioquia'),('Arauca'),('Atlántico'),('Bolívar'),('Boyacá'),('Caldas'),('Caquetá'),('Casanare'),('Cauca'),('Cesar'),('Chocó'),('Córdoba'),('Cundinamarca'),('Desconocido'),('Guainía'),('Guaviare'),('Huila'),('La Guajira'),('Magdalena'),('Meta'),('Nariño'),('Norte de Santander'),('Putumayo'),('Quindío'),('Risaralda'),('San Andrés y Providencia'),('Santander'),('Sucre'),('Tolima'),('Valle del Cauca'),('Vaupés'),('Vichada');`

const municipio:string = `INSERT INTO municipio (municipio,id_departamento) VALUES 
('Leticia',1),('Puerto Nariño',1),('Medellín',2),('Bello',2),('Rionegro',2),('Abejorral',2),('Abriaqui',2),('Alejandría',2),('Amaga',2),('Amalfi',2),('Andes',2),('Angelopolis',2),('Angostura',2),('Anorí',2),('Anza',2),('Apartado',2),('Arboletes',2),('Argelia',2),('Armenia',2),('Barbosa',2),('Belmira',2),('Betania',2),('Betulia',2),('Bolívar',2),('Briceño',2),('Buritica',2),('Cáceres',2),('Caicedo',2),('Caldas',2),('Campamento',2),('Cañasgordas',2),('Caracolí',2),('Caramanta',2),('Carepa',2),('Carmen De Viboral',2),('Carolina',2),('Caucasia',2),('Chigorodó',2),('Cisneros',2),('Cocorná',2),('Concepción',2),('Concordia',2),('Copacabana',2),('Dabeiba',2),('Don Matías',2),('Ebejico',2),('El Bagre',2),('Entrerrios',2),('Envigado',2),('Fredonia',2),('Frontino',2),('Giraldo',2),('Girardota',2),('Gómez Plata',2),('Granada',2),('Guadalupe',2),('Guarne',2),('Guatapé',2),('Heliconia',2),('Hispania',2),('Itagui',2),('Ituango',2),('Jardín',2),('Jericó',2),('La Ceja',2),('La Estrella',2),('La Pintada',2),('La Unión',2),('Liborina',2),('Maceo',2),('Marinilla',2),('Montebello',2),('Murindó',2),('Mutatá',2),('Nariño',2),('Nechí',2),('Necoclí',2),('Olaya',2),('Peñol',2),('Peque',2),('Pueblorrico',2),('Puerto Berrío',2),('Puerto Nare',2),('Puerto Triunfo',2),('Remedios',2),('Retiro',2),('Sabanalarga',2),('Sabaneta',2),('Salgar',2),('San Andrés',2),('San Carlos',2),('San Francisco',2),('San Pedro De Uraba',2),('San José De La Montaña',2),('San Juan De Uraba',2),('Santa Rosa De Osos',2),('San Pedro',2),('San Jerónimo',2),('San Rafael',2),('San Roque',2),('San Vicente',2),('Santa Bárbara',2),('San Luis',2),('Santafé De Antioquia',2),('Santo Domingo',2),('Santuario',2),('Segovia',2),('Sonsón',2),('Sopetrán',2),('Támesis',2),('Taraza',2),('Tarso',2),('Titiribí',2),('Toledo',2),('Turbo',2),('Uramita',2),('Urrao',2),('Valdivia',2),('Valparaíso',2),('Vegachi',2),('Venecia',2),('Vigía Del Fuerte',2),('Yali',2),('Yarumal',2),('Yolombó',2),('Yondó',2),('Zaragoza',2),('San Pedro De Los Milagros',2),('Currulao',2),('Arauca',3),('Arauquita',3),('Cravo Norte',3),('Fortul',3),('Puerto Rondón',3),('Saravena',3),('Tame',3),('Candelaria',4),('Barranquilla',4),('Baranoa',4),('Campo De La Cruz',4),('Galapa',4),('Juan De Acosta',4),('Luruaco',4),('Malambo',4),('Manatí',4),('Palmar De Varela',4),('Piojó',4),('Polo Nuevo',4),('Ponedera',4),('Puerto Colombia',4),('Repelón',4),('Sabanagrande',4),('Sabanalarga',4),('Santa Lucia',4),('Santo Tomás',4),('Soledad',4),('Suan',4),('Tubará',4),('Usiacurí',4),('Cartagena De Indias',5),('Achí',5),('Altos Del Rosario',5),('Arenal',5),('Arjona',5),('Arroyohondo',5),('Barranco De Loba',5),('Calamar',5),('Cantagallo',5),('Cicuco',5),('Clemencia',5),('Córdoba',5),('El Carmen De Bolívar',5),('El Guamo',5),('El Peñón',5),('Hatillo De Loba',5),('Magangué',5),('Mahates',5),('Margarita',5),('Maria La Baja',5),('Mompós',5),('Montecristo',5),('Morales',5),('Pinillos',5),('Regidor',5),('Río Viejo',5),('San Cristóbal',5),('San Estanislao',5),('San Fernando',5),('San Jacinto',5),('San Jacinto Del Cauca',5),('San Juan Nepomuceno',5),('San Martín De Loba',5),('San Pablo',5),('Santa Catalina',5),('Santa Rosa',5),('Santa Rosa Del Sur',5),('Simití',5),('Soplaviento',5),('Talaigua Nuevo',5),('Tiquisio',5),('Turbaco',5),('Turbaná',5),('Villanueva',5),('Zambrano',5),('Cartagena',5),('Almeida',6),('Aquitania',6),('Arcabuco',6),('Belén',6),('Berbeo',6),('Beteitiva',6),('Boavita',6),('Boyacá',6),('Briceño',6),('Buenavista',6),('Busbanza',6),('Caldas',6),('Campohermoso',6),('Cerinza',6),('Chinavita',6),('Chiquinquirá',6),('Chiquiza',6),('Chiscas',6),('Chita',6),('Chitaraque',6),('Chivata',6),('Chivor',6),('Ciénega',6),('Combita',6),('Coper',6),('Corrales',6),('Covarachia',6),('Cubara',6),('Cucaita',6),('Cuitiva',6),('Duitama',6),('El Cocuy',6),('El Espino',6),('Firavitoba',6),('Floresta',6),('Gachantiva',6),('Gameza',6),('Garagoa',6),('Guacamayas',6),('Guateque',6),('Guayata',6),('Guican',6),('Iza',6),('Jenesano',6),('Jericó',6),('La Capilla',6),('La Uvita',6),('La Victoria',6),('Labranzagrande',6),('Leiva',6),('Macanal',6),('Maripi',6),('Miraflores',6),('Mongua',6),('Monguí',6),('Moniquirá',6),('Motavita',6),('Muzo',6),('Nobsa',6),('Nuevo Colón',6),('Oicata',6),('Otanche',6),('Pachavita',6),('Páez',6),('Paipa',6),('Pajarito',6),('Panqueba',6),('Pauna',6),('Paya',6),('Paz Del Río',6),('Pesca',6),('Pisba',6),('Puerto Boyacá',6),('Quipama',6),('Ramiriquí',6),('Ráquira',6),('Rondón',6),('Saboya',6),('Sáchica',6),('Samacá',6),('San Eduardo',6),('San José De Pare',6),('San Luis De Gaceno',6),('San Mateo',6),('San Miguel De Sema',6),('San Pablo De Borbur',6),('Santa Maria',6),('Santa Rosa De Viterbo',6),('Santa Sofía',6),('Santana',6),('Sativanorte',6),('Sativasur',6),('Siachoque',6),('Soata',6),('Socha',6),('Socota',6),('Sogamoso',6),('Somondoco',6),('Sora',6),('Soracá',6),('Sotaquirá',6),('Susacon',6),('Sutamarchán',6),('Sutatenza',6),('Tasco',6),('Tenza',6),('Tibaná',6),('Tibasosa',6),('Tinjacá',6),('Tipacoque',6),('Toca',6),('Toguí',6),('Topaga',6),('Tota',6),('Tunja',6),('Tunungua',6),('Turmequé',6),('Tuta',6),('Tutasa',6),('Umbita',6),('Ventaquemada',6),('Viracacha',6),('Zetaquira',6),('Villa De Leyva',6),('Chinchiná',7),('Marmato',7),('Pacora',7),('Salamina',7),('Villamaría',7),('Aguadas',7),('Filadelfia',7),('Marquetalia',7),('Palestina',7),('Samana',7),('Viterbo',7),('Anserma',7),('La Dorada',7),('Marulanda',7),('Pensilvania',7),('San Jose',7),('Aranzazu',7),('La Merced',7),('Neira',7),('Riosucio',7),('Supía',7),('Belalcazar',7),('Manzanares',7),('Norcasia',7),('Risaralda',7),('Victoria',7),('Manizales',7),('Albania',8),('Belén Andaquies',8),('Cartagena del Chaira',8),('Curillo',8),('El Doncello',8),('El Paujil',8),('Florencia',8),('La Montañita',8),('Milán',8),('Morelia',8),('Puerto Rico',8),('San José De Fragua',8),('San Vicente Del Caguan',8),('Solano',8),('Solita',8),('Valparaíso',8),('Aguazul',9),('Chameza',9),('Hato Corozal',9),('La Salina',9),('Maní',9),('Monterrey',9),('Orocué',9),('Paz De Ariporo',9),('Pore',9),('Recetor',9),('Sabanalarga',9),('Sacama',9),('San Luis De Palenque',9),('Tamara',9),('Tauramena',9),('Trinidad',9),('Villanueva',9),('Yopal',9),('Almaguer',10),('Argelia',10),('Balboa',10),('Bolívar',10),('Buenos Aires',10),('Cajibio',10),('Caldono',10),('Caloto',10),('Corinto',10),('El Tambo',10),('Florencia',10),('Guapi',10),('Inza',10),('Jambaló',10),('La Sierra',10),('La Vega',10),('López',10),('Mercaderes',10),('Miranda',10),('Morales',10),('Padilla',10),('Páez',10),('Patía (El Bordo)',10),('Piamonte',10),('Piendamo',10),('Poapayán',10),('Puerto Tejada',10),('Purace',10),('Rosas',10),('San Sebastián',10),('Santa Rosa',10),('Santander De Quilichao',10),('Silvia',10),('Sotara',10),('Suárez',10),('Sucre',10),('Timbío',10),('Timbiquí',10),('Toribio',10),('Totoro',10),('Villa Rica',10),('Popayán',10),('Guachené',10),('Aguachica',11),('Agustín Codazzi',11),('Astrea',11),('Becerril',11),('Bosconia',11),('Chimichagua',11),('Chiriguaná',11),('Curumaní',11),('El Copey',11),('El Paso',11),('Gamarra',11),('González',11),('La Gloria',11),('La Jagua Ibirico',11),('Manaure Balcón Del Cesar',11),('Pailitas',11),('Pelaya',11),('Pueblo Bello',11),('Río De Oro',11),('Robles (La Paz)',11),('San Alberto',11),('San Diego',11),('San Martín',11),('Tamalameque',11),('Valledupar',11),('Montería',11),('Aguas Blancas',11),('La Loma de Calenturas',11),('Acandi',12),('Alto Baudo (Pie De Pato)',12),('Atrato',12),('Bagado',12),('Bahia Solano (Mutis)',12),('Bajo Baudo (Pizarro)',12),('Bojaya (Bellavista)',12),('Canton De San Pablo',12),('Carmen Del Darien',12),('Certegui',12),('Condoto',12),('El Carmen',12),('Istmina',12),('Jurado',12),('Litoral Del San Juan',12),('Lloro',12),('Medio Atrato',12),('Medio Baudo (Boca De Pepe)',12),('Medio San Juan',12),('Novita',12),('Nuqui',12),('Quibdo',12),('Rio Iro',12),('Rio Quito',12),('Riosucio',12),('San Jose Del Palmar',12),('Sipi',12),('Tado',12),('Unguia',12),('Unión Panamericana',12),('Ayapel',13),('Buenavista',13),('Canalete',13),('Cereté',13),('Chima',13),('Chinú',13),('Cienaga De Oro',13),('Cotorra',13),('La Apartada',13),('Lorica',13),('Los Córdobas',13),('Momil',13),('Montelíbano',13),('Montería',13),('Moñitos',13),('Planeta Rica',13),('Pueblo Nuevo',13),('Puerto Escondido',13),('Puerto Libertador',13),('Purísima',13),('Sahagún',13),('San Andréssotavento',13),('San Antero',13),('San Bernardo Viento',13),('San Carlos',13),('San Pelayo',13),('Tierralta',13),('Valencia',13),('Bogotá',14),('Soacha',14),('Funza',14),('Zipaquirá',14),('Chía',14),('Agua de Dios',14),('Alban',14),('Anapoima',14),('Anolaima',14),('Arbelaez',14),('Beltrán',14),('Bituima',14),('Bojacá',14),('Cabrera',14),('Cachipay',14),('Cajicá',14),('Caparrapí',14),('Caqueza',14),('Carmen De Carupa',14),('Chaguaní',14),('Chipaque',14),('Choachí',14),('Chocontá',14),('Cogua',14),('Cota',14),('Cucunubá',14),('El Colegio',14),('El Peñón',14),('El Rosal',14),('Facatativa',14),('Fómeque',14),('Fosca',14),('Fúquene',14),('Fusagasuga',14),('Gachalá',14),('Gachancipá',14),('Gacheta',14),('Gama',14),('Girardot',14),('Granada',14),('Guachetá',14),('Guaduas',14),('Guasca',14),('Guataquí',14),('Guatavita',14),('Guayabal De Siquima',14),('Guayabetal',14),('Gutiérrez',14),('Jerusalén',14),('Junín',14),('La Calera',14),('La Mesa',14),('La Palma',14),('La Peña',14),('La Vega',14),('Lenguazaque',14),('Machetá',14),('Madrid',14),('Manta',14),('Medina',14),('Mosquera',14),('Nariño',14),('Nemocón',14),('Nilo',14),('Nimaima',14),('Nocaima',14),('Ospina Pérez',14),('Pacho',14),('Paime',14),('Pandi',14),('Paratebueno',14),('Pasca',14),('Puerto Salgar',14),('Pulí',14),('Quebradanegra',14),('Quetame',14),('Quipile',14),('Rafael Reyes',14),('Ricaurte',14),('San Antonio Del Tequendama',14),('San Bernardo',14),('San Cayetano',14),('San Juan De Rioseco',14),('San Francisco',14),('Sasaima',14),('Sesquilé',14),('Sibaté',14),('Silvania',14),('Simijaca',14),('Sopó',14),('Subachoque',14),('Suesca',14),('Supatá',14),('Susa',14),('Sutatausa',14),('Tabio',14),('Tausa',14),('Tena',14),('Tenjo',14),('Tibacuy',14),('Tibirita',14),('Tocaima',14),('Tocancipá',14),('Topaipí',14),('Ubalá',14),('Ubaque',14),('Ubaté',14),('Une',14),('Utica',14),('Vergara',14),('Viani',14),('Villagomez',14),('Villapinzón',14),('Villeta',14),('Viota',14),('Yacopí',14),('Zipacón',14),('Siberia',14),('Apulo',14),('Desconocido',15),('Inírida',16),('Barrancominas',16),('Cacahual',16),('La Guadalupe',16),('Mapiripana',16),('Morichal Nuevo',16),('Pana Pana',16),('Puerto Colombia',16),('San Felipe',16),('El Calamar',17),('El Retorno',17),('Miraflores',17),('San José Del Guaviare',17),('Acevedo',18),('Agrado',18),('Aipe',18),('Algeciras',18),('Altamira',18),('Baraya',18),('Campoalegre',18),('Colombia',18),('Elias',18),('Garzón',18),('Gigante',18),('Guadalupe',18),('Hobo',18),('Iquira',18),('Isnos',18),('La Plata',18),('La argentina',18),('Nataga',18),('Neiva',18),('Oporapa',18),('Paicol',18),('Palermo',18),('Palestina',18),('Pital',18),('Pitalito',18),('Rivera',18),('Saladoblanco',18),('San Agustín',18),('Santa Maria',18),('Suaza',18),('Tarqui',18),('Tello',18),('Teruel',18),('Tesalia',18),('Timana',18),('Villavieja',18),('Yaguará',18),('Albania',19),('Barrancas',19),('Dibulla',19),('Distraccion',19),('El molino',19),('Fonseca',19),('Hatonuevo',19),('La Jagua Del Pilar',19),('Maicao',19),('Manaure',19),('Riohacha',19),('San Juan Del Cesar',19),('Uribia',19),('Urumita',19),('Villanueva',19),('Santa Marta',20),('Algarrobo',20),('Aracataca',20),('Ariguani',20),('Cerro San Antonio',20),('Chivolo',20),('Cienaga',20),('Concordia',20),('El Banco',20),('El Piñon',20),('El Reten',20),('Fundacion',20),('Guamal',20),('Nueva Granada',20),('Pedraza',20),('Pijiño Del Carmen',20),('Pivijay',20),('Plato',20),('Puebloviejo',20),('Remolino',20),('Sabanas De San Angel',20),('Salamina',20),('San Sebastian De Buenavista',20),('San Zenon',20),('Santa Ana',20),('Santa Barbara De Pinto',20),('Sitionuevo',20),('Tenerife',20),('Zapayan',20),('Zona Bananera',20),('Acacias',21),('Barranca De Upia',21),('Cabuyaro',21),('Castilla La Nueva',21),('Cubarral',21),('Cumaral',21),('El Calvario',21),('El Castillo',21),('El Dorado',21),('Fuente De Oro',21),('Granada',21),('Guamal',21),('La Macarena',21),('La Uribe',21),('Lejanías',21),('Mapiripán',21),('Mesetas',21),('Puerto Concordia',21),('Puerto Gaitán',21),('Puerto Lleras',21),('Puerto López',21),('Puerto Rico',21),('Restrepo',21),('San Carlos Guaroa',21),('San Juanito',21),('San Martín',21),('San Juan De Arama',21),('Villavicencio',21),('Vista Hermosa',21),('Alban',22),('Aldaña',22),('Ancuya',22),('Arboleda',22),('Barbacoas',22),('Belen',22),('Buesaco',22),('Chachagui',22),('Colon(Genova)',22),('Consaca',22),('Contadero',22),('Cordoba',22),('Cuaspud',22),('Cumbal',22),('Cumbitara',22),('El Charco',22),('El Peñol',22),('El Rosario',22),('El Tablon',22),('El Tambo',22),('Funes',22),('Guachucal',22),('Guaitarilla',22),('Gualmatan',22),('Iles',22),('Imues',22),('Ipiales',22),('La Cruz',22),('La Florida',22),('La Llanada',22),('La Tola',22),('La Unión',22),('Leiva',22),('Linares',22),('Los Andes',22),('Magui',22),('Mallama',22),('Mosquera',22),('Nariño',22),('Olaya Herrera',22),('Ospina',22),('Pasto',22),('Pizarro',22),('Policarpa',22),('Potosi',22),('Providencia',22),('Puerres',22),('Pupiales',22),('Ricaurte',22),('Roberto Payan',22),('Samaniego',22),('San Bernardo',22),('San Lorenzo',22),('San Pablo',22),('San Pedro De Cartago',22),('Sandoná',22),('Santa Barbara',22),('Santacruz',22),('Sapuyes',22),('Taminango',22),('Tangua',22),('Tumaco',22),('Túquerres',22),('Yacuanquer',22),('Francisco Pizarro',22),('Abrego',23),('Arboledas',23),('Bochalema',23),('Bucarasica',23),('Cáchira',23),('Cácota',23),('Chinácota',23),('Chitagá',23),('Convención',23),('Cúcuta',23),('Cucutilla',23),('Durania',23),('El Carmen',23),('El Tarra',23),('El Zulia',23),('Gramalote',23),('Hacari',23),('Herrán',23),('La Esperanza',23),('La Playa',23),('Labateca',23),('Los Patios',23),('Lourdes',23),('Mutiscua',23),('Ocaña',23),('Pamplona',23),('Pamplonita',23),('Puerto Santander',23),('Ragonvalia',23),('Salazar',23),('San Calixto',23),('San Cayetano',23),('Santiago',23),('Sardinata',23),('Silos',23),('Teorama',23),('Tibú',23),('Toledo',23),('Villa Del Rosario',23),('Villacaro',23),('Colón',24),('Mocoa',24),('Orito',24),('Puerto Asís',24),('Puerto Caycedo',24),('Puerto Guzmán',24),('Puerto Leguízamo',24),('San Francisco',24),('San Miguel',24),('Santiago',24),('Sibundoy',24),('Valle Del Guamuez',24),('Villagarzón',24),('Armenia',25),('Buenavista',25),('Calarcá',25),('Circasia',25),('Córdoba',25),('Filandia',25),('Génova',25),('La Tebaida',25),('Montenegro',25),('Pijao',25),('Quimbaya',25),('Salento',25),('Pereira',26),('Apia',26),('Balboa',26),('Belén De Umbría',26),('Dos Quebradas',26),('Guatica',26),('La Celia',26),('La Virginia',26),('Marsella',26),('Mistrato',26),('Pueblo Rico',26),('Quinchía',26),('Santa Rosa De Cabal',26),('Santuario',26),('San Andrés Y Providencia',27),('Bucaramanga',28),('Aguada',28),('Albania',28),('Aratoca',28),('Barbosa',28),('Barichara',28),('Barrancabermeja',28),('Betulia',28),('Bolívar',28),('Cabrera',28),('California',28),('Capitanejo',28),('Carcasi',28),('Cepita',28),('Cerrito',28),('Charalá',28),('Charta',28),('Chima',28),('Chipatá',28),('Cimitarra',28),('Concepción',28),('Confines',28),('Contratación',28),('Coromoro',28),('Curití',28),('El Carmen',28),('El Guacamayo',28),('El Peñón',28),('El Playón',28),('Encino',28),('Enciso',28),('Florián',28),('Floridablanca',28),('Galán',28),('Gambita',28),('Girón',28),('Guaca',28),('Guadalupe',28),('Guapota',28),('Guavatá',28),('Guepsa',28),('Hato',28),('Jesús Maria',28),('Jordán',28),('La Belleza',28),('La Paz',28),('Landazuri',28),('Lebrija',28),('Los Santos',28),('Macaravita',28),('Málaga',28),('Matanza',28),('Mogotes',28),('Molagavita',28),('Ocamonte',28),('Oiba',28),('Onzaga',28),('Palmar',28),('Palmas Del Socorro',28),('Páramo',28),('Piedecuesta',28),('Pinchote',28),('Puente Nacional',28),('Puerto Parra',28),('Puerto Wilches',28),('Sabana De Torres',28),('San Andrés',28),('San Benito',28),('San Gil',28),('San Joaquín',28),('San José De Miranda',28),('San Miguel',28),('San Vicente De Chucurí',28),('Santa Bárbara',28),('Santa Helena',28),('Simacota',28),('Socorro',28),('Suaita',28),('Sucre',28),('Surata',28),('Tona',28),('Valle San José',28),('Vélez',28),('Vetas',28),('Villanueva',28),('Zapatoca',28),('Buenavista',29),('Caimito',29),('Chalán',29),('Coloso',29),('Corozal',29),('El Roble',29),('Galeras',29),('Guaranda',29),('La Unión',29),('Los Palmitos',29),('Majagual',29),('Morroa',29),('Ovejas',29),('Palmito',29),('Sampues',29),('San Benito Abad',29),('San Juan De Betulia',29),('San Marcos',29),('San Onofre',29),('San Pedro',29),('Sincé',29),('Sincelejo',29),('Sucre',29),('Toluviejo',29),('Tolú',29),('Coveñas',29),('Alpujarra',30),('Alvarado',30),('Ambalema',30),('Anzoategui',30),('Armero (Guayabal)',30),('Ataco',30),('Cajamarca',30),('Carmen De Apicalá',30),('Casabianca',30),('Chaparral',30),('Coello',30),('Coyaima',30),('Cunday',30),('Dolores',30),('Espinal',30),('Falán',30),('Flandes',30),('Fresno',30),('Guamo',30),('Herveo',30),('Honda',30),('Ibagué',30),('Icononzo',30),('Lérida',30),('Líbano',30),('Mariquita',30),('Melgar',30),('Murillo',30),('Natagaima',30),('Ortega',30),('Palocabildo',30),('Piedras',30),('Planadas',30),('Prado',30),('Purificación',30),('Rioblanco',30),('Roncesvalles',30),('Rovira',30),('Saldaña',30),('San Antonio',30),('San Luis',30),('Santa Isabel',30),('Suárez',30),('Valle De San Juan',30),('Venadillo',30),('Villahermosa',30),('Villarrica',30),('Cali',31),('Yumbo',31),('Alcalá',31),('Andalucía',31),('Ansermanuevo',31),('Argelia',31),('Bolívar',31),('Buenaventura',31),('Buga',31),('Bugalagrande',31),('Caicedonia',31),('Calima (Darien)',31),('Cartago',31),('Dagua',31),('El Aguila',31),('El Cairo',31),('El Cerrito',31),('El Dovio',31),('Florida',31),('Ginebra',31),('Guacarí',31),('Jamundí',31),('La Cumbre',31),('La Unión',31),('La Victoria',31),('Obando',31),('Palmira',31),('Pradera',31),('Restrepo',31),('Riofrío',31),('Roldanillo',31),('San Pedro',31),('Sevilla',31),('Toro',31),('Trujillo',31),('Tulúa',31),('Ulloa',31),('Versalles',31),('Vijes',31),('Yotoco',31),('Zarzal',31),('Candelaria',31),('Mitú',32),('Caruru',32),('Pacoa',32),('Papunaua',32),('Taraira',32),('Yavaraté',32),('Cumaribo',33),('La Primavera',33),('Puerto Carreño',33),('Santa Rosalía',33);`
export const run =async ()=>{
    
    try {
        await db.query(apoyo,{type:QueryTypes.INSERT} )

        await db.query(roles,{type:QueryTypes.INSERT} )
        await db.query(estado,{type:QueryTypes.INSERT} )
        
        await db.query(departamento,{type:QueryTypes.INSERT} )
        await db.query(municipio,{type:QueryTypes.INSERT} )
        
        await funcionario.create({cedula:"1111",primer_nombre:"Admin",
        segundo_nombre:null,primer_apellido:"Admin",segundo_apellido:null,fecha_de_nacimiento:"10/12/1973",
        usuario:"admin",contraseña:"1234", id_estado:"1",id_rol:1})
           
        await funcionario.create({cedula:"43756123",primer_nombre:"Fernando",
        segundo_nombre:null,primer_apellido:"Gutierrez",
        segundo_apellido:"Lopera",fecha_de_nacimiento:"10/12/1973",
        usuario:"fgutierrezl",contraseña:"1234",id_estado:"1",id_rol:"3"})
    } catch (error) {
        console.log(error)
    }
    
}