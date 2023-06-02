require('dotenv').config();
const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || '127.0.0.1',
  user: DB_USER || 'root',
  password: DB_PASS,
  database: DB_NAME || 'adjectives',
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');

  let sql =
    'DROP TABLE IF EXISTS adjectives; CREATE TABLE adjectives (id INT NOT NULL AUTO_INCREMENT, spanish VARCHAR(40) NOT NULL, english VARCHAR(40) NOT NULL, image_url VARCHAR(255), PRIMARY KEY (id));';

  const adjectives = [
    {
      id: 1,
      spanish: 'adorable',
      english: 'adorable',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/ww7prxc65mm87mrh6knhc89/adorable.svg',
    },
    {
      id: 2,
      spanish: 'agotada',
      english: 'exhausted',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/kx6qq5xnh8c4cwfpjrggk/agotada.svg',
    },
    {
      id: 3,
      spanish: 'angelical',
      english: 'angelical',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/wfqthm5rrh55ff5jrhjjwxmh/angelical.svg',
    },
    {
      id: 4,
      spanish: 'anonadada',
      english: 'overwhelmed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/tqcrgzhwcwc69sb83tr93tb/anonadada.svg',
    },
    {
      id: 5,
      spanish: 'asombrada',
      english: 'amazed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/wbnnb467rg3bwgsxmt4kmjb9/asombrada.svg',
    },
    {
      id: 6,
      spanish: 'asustada',
      english: 'scared',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/6h4f6q5bxs33c5rq6jmfntwg/asustada.svg',
    },
    {
      id: 7,
      spanish: 'avergonzada',
      english: 'ashamed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/qxm3b4cfpp73wrbnr8w5878/avergonzada.svg',
    },
    {
      id: 8,
      spanish: 'bonita',
      english: 'beautiful',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/fhtpj4gq8psr4wh4n6386wc/bonita.svg',
    },
    {
      id: 9,
      spanish: 'burlona',
      english: 'mocking',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/m5vkhfpgnc6qqpqccrbp97/burlona.svg',
    },
    {
      id: 10,
      spanish: 'callada',
      english: 'quiet',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/xkcq47mj6j6j5ncc4mj7xgg4/callada.svg',
    },
    {
      id: 11,
      spanish: 'cansada',
      english: 'tired',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/r9mwtkvrpm4nbvkh555xv9h/cansada.svg',
    },
    {
      id: 12,
      spanish: 'cariñosa',
      english: 'affectionate',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/pfh3hwkh6cqn4m3g44nc/carinosa.svg',
    },
    {
      id: 13,
      spanish: 'chevere',
      english: 'cool',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/6x785897k92rgf4m7kt7/chevere.svg',
    },
    {
      id: 14,
      spanish: 'confundida',
      english: 'confused',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/r4zqgk6xmcfqfm88q4n9/confundida.svg',
    },
    {
      id: 15,
      spanish: 'contenta',
      english: 'happy',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/tnmzvz74tz8zwk9kgxgvgmsw/contenta.svg',
    },
    {
      id: 16,
      spanish: 'curiosa',
      english: 'curious',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/cskrmx7xbqmccp3fxj9x8q9r/curiosa.svg',
    },
    {
      id: 17,
      spanish: 'decepcionada',
      english: 'disappointed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/gk735bcn8pkkffx59wfq8wx/decepcionada.svg',
    },
    {
      id: 18,
      spanish: 'desconsolada',
      english: 'heartbroken',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/br869kk267nbjf5tkbqtvg/desconsolada.svg',
    },
    {
      id: 19,
      spanish: 'discreta',
      english: 'discreet',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/bpgr4gxb86h5n9bj98793m/discreta.svg',
    },
    {
      id: 20,
      spanish: 'dubitativa',
      english: 'doubtful',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/h87fkg9rmtcbpgfjt93cvx/dubitativa.svg',
    },
    {
      id: 21,
      spanish: 'enamorada',
      english: 'in love',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/6sjrjc8x95t5t4wz45vcw8t6/enamorada.svg',
    },
    {
      id: 22,
      spanish: 'encantada',
      english: 'delighted',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/crhg4j6z9f2r8znp9xhbnws/encantada.svg',
    },
    {
      id: 23,
      spanish: 'encantada',
      english: 'delighted',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/crhg4j6z9f2r8znp9xhbnws/encantada.svg',
    },
    {
      id: 24,
      spanish: 'enfadada',
      english: 'angry',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/pt2j4qbv6chtmjqvx29pb25/enfadada.svg',
    },
    {
      id: 25,
      spanish: 'enferma',
      english: 'sick',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/5jcjxgjsf6649bjpnk6nvnmb/enferma.svg',
    },
    {
      id: 26,
      spanish: 'fastidiada',
      english: 'annoyed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/nhcvpvjqrrsgkth76gmrb9f/fastidiada.svg',
    },
    {
      id: 27,
      spanish: 'feliz',
      english: 'happy',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/w8bxk7snkkjf6fg4bktgkwc/feliz.svg',
    },
    {
      id: 28,
      spanish: 'frustrada',
      english: 'frustrated',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/cwhnkrmfhtk73crr9fzv8s3/frustrada.svg',
    },
    {
      id: 29,
      spanish: 'impresionada',
      english: 'impressed',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/g3kpnfqcfhcqfmcnbwxb54g3/impresionada.svg',
    },
    {
      id: 30,
      spanish: 'incómoda',
      english: 'uncomfortable',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/3j9x67xxkjrkqfcjbctxxk64/incomoda.svg',
    },
    {
      id: 31,
      spanish: 'insolente',
      english: 'insolent',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/gkc3qvxhc7pzkf3v7rt8szn3/insolente.svg',
    },
    {
      id: 32,
      spanish: 'llorosa',
      english: 'teary',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/xh868whfg7rr2mjp4zpqft/llorosa.svg',
    },
    {
      id: 33,
      spanish: 'loca',
      english: 'crazy',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/crkt9t75zb8m5h7h539f5x/loca.svg',
    },
    {
      id: 34,
      spanish: 'malvada',
      english: 'evil',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/8q2qsfbh9s9nfsw94cv8h9g/malvada.svg',
    },
    {
      id: 35,
      spanish: 'muda',
      english: 'mute',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/9rpc77z9v6sgsc39jxgv63/muda.svg',
    },
    {
      id: 36,
      spanish: 'pensativa',
      english: 'thoughtful',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/2vb5jfvhqr3mhzj7sjj3n5m/pensativa.svg',
    },
    {
      id: 37,
      spanish: 'picara',
      english: 'mischievous',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/rkmmwmpqh63fpj9r87tq7zn6/picara.svg',
    },
    {
      id: 38,
      spanish: 'sorprendida',
      english: 'surprised',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/3vvcx5hrps9wfbq7xchcjp/sorprendida.svg',
    },
    {
      id: 39,
      spanish: 'suspicaz',
      english: 'suspicious',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/xp5ws8n5j6mfwp4vvwhmmffk/suspicaz.svg',
    },
    {
      id: 40,
      spanish: 'tímida',
      english: 'shy',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/s749c57v88bgmtkhxgqbz4m/timida.svg',
    },
    {
      id: 41,
      spanish: 'traviesa',
      english: 'naughty',
      image_url:
        'https://cdn.bfldr.com/Z0BJ31FP/at/4wkj8nrpb7hv75s2c7qt3v4/traviesa.svg',
    },
  ];

  adjectives.forEach((adj) => {
    sql += `INSERT INTO adjectives (spanish, english, image_url) VALUES ('${adj.spanish}', '${adj.english}', '${adj.image_url}'); `;
  });

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table creation and data insertion was successful!');
    console.log('Closing...');
    con.end();
  });
});
