import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  dflkjsdlkfj
  @PREAMBLE{"\newcommand{\noopsort}[1]{}"}

  @COMMENT{"\nslkdjflksdjflkdsjf"}

  @article{paglione2001mapping,
    title={A Mapping Survey of the 13CO and 12CO Emission in Galaxies},
    author={Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.},
    journal={The Astrophysical Journal Supplement Series},
    volume={135},
    pages={183},
    year={2001},
    publisher={IOP Publishing}
  }

  @article{jackson418nguyen,
    title={Nguyen-Q-Rieu. 1993},
    author={Jackson, J.M. and Paglione, T.A.D. and Ishizuki, S.},
    journal={ApJ},
    volume={418},
    pages={L13}
  }
  lskjdfsdkljf
  @article{jackson1996hcn,
    title={HCN and CO in the Central 630 Parsecs of the Galaxy},
    author={Jackson, J.M. and Heyer, M.H. and Paglione, T.A.D. and Bolatto, A.D.},
    journal={The Astrophysical Journal Letters},
    volume={456},
    pages={L91},
    year={1996},
    publisher={IOP Publishing}
  }

  @article{paglione1996diffuse,
    title={Diffuse Gamma-Ray Emission from the Starburst Galaxy NGC 253},
    author={Paglione, T.A.D. and Marscher, A.P. and Jackson, J.M. and Bertsch, D.L.},
    journal={The Astrophysical Journal},
    volume={460},
    pages={295},
    year={1996}
  }

  @article{paglione1995distribution,
    title={The Distribution of the Dense Clouds in the Starburst Nucleus of NGC 253},
    author={Paglione, T.A.D. and Tosaki, T. and Jackson, J.M.},
    journal={The Astrophysical Journal Letters},
    volume={454},
    pages={L117},
    year={1995},
    publisher={IOP Publishing}
  }

  @article{blom1999diffuse,
    title={Diffuse gamma-ray emission from starburst galaxies and M31},
    author={Blom, J.J. and Paglione, T.A.D. and Carrami{\~n}ana, A.},
    journal={The Astrophysical Journal},
    volume={516},
    pages={744},
    year={1999},
    publisher={IOP Publishing}
  }

  @article{smolvcic2009cosmic,
    title={Cosmic evolution of radio selected active galactic nuclei in the COSMOS field},
    author={Smol{\v{c}}i{\'c}, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{\^\i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others},
    journal={The Astrophysical Journal},
    volume={696},
    pages={24},
    year={2009},
    publisher={IOP Publishing}
  }

  @article{paglione1997average,
    title={The average properties of the dense molecular gas in galaxies},
    author={Paglione, T.A.D. and Jackson, J.M. and Ishizuki, S.},
    journal={The Astrophysical Journal},
    volume={484},
    pages={656},
    year={1997},
    publisher={IOP Publishing}
  }

  @article{jackson1995submillimeter,
    title={Submillimeter HCN and HCO (+) emission from galaxies},
    author={Jackson, J.M. and Paglione, T.A.D. and Carlstrom, J.E. and Rieu, N.Q.},
    journal={The Astrophysical Journal},
    volume={438},
    pages={695--701},
    year={1995}
  }

  @article{paglione1998interpreting,
    title={Interpreting the HCN/CO intensity ratio in the galactic center},
    author={Paglione, T.A.D. and Jackson, J.M. and Bolatto, A.D. and Heyer, M.H.},
    journal={The Astrophysical Journal},
    volume={493},
    pages={680},
    year={1998},
    publisher={IOP Publishing}
  }

  @article{smolvcic2009dust,
    title={The Dust-Unbiased Cosmic Star-Formation History from the 20 CM VLA-COSMOS Survey},
    author={Smol{\v{c}}i{\'c}, V. and Schinnerer, E. and Zamorani, G. and Bell, EF and Bondi, M. and Carilli, CL and Ciliegi, P. and Mobasher, B. and Paglione, T. and Scodeggio, M. and others},
    journal={The Astrophysical Journal},
    volume={690},
    pages={610},
    year={2009},
    publisher={IOP Publishing}
  }

  @article{jackson1993dense,
    title={Dense molecular gas toward the nucleus of the Seyfert galaxy NGC 1068},
    author={Jackson, J.M. and Paglione, T.A.D. and Ishizuki, S. and others},
    journal={The Astrophysical Journal},
    volume={418},
    pages={L13},
    year={1993}
  }

  @article{paglione2004structure,
    title={The structure, kinematics, and physical properties of the molecular gas in the starburst nucleus of NGC 253},
    author={Paglione, T.A.D. and Yam, O. and Tosaki, T. and Jackson, J.M.},
    journal={The Astrophysical Journal},
    volume={611},
    pages={835},
    year={2004},
    publisher={IOP Publishing}
  }

  @article{kraemer19972000,
    title={A 2000 M Rotating Molecular Disk Around NGC 6334A},
    author={Kraemer, K.E. and Jackson, J.M. and Paglione, T.A.D. and Bolatto, A.D.},
    journal={The Astrophysical Journal},
    volume={478},
    pages={614},
    year={1997},
    publisher={IOP Publishing}
  }

  @article{liu2008faint,
    title={The faint-end slopes of galaxy luminosity functions in the COSMOS field},
    author={Liu, C.T. and Capak, P. and Mobasher, B. and Paglione, T.A.D. and Rich, R.M. and Scoville, N.Z. and Tribiano, S.M. and Tyson, N.D.},
    journal={The Astrophysical Journal},
    volume={672},
    pages={198},
    year={2008},
    publisher={IOP Publishing}
  }

  @article{paglione1995first,
    title={First Observations of extragalactic CSJ= 1 goes to 0},
    author={Paglione, T.A.D. and Jackson, J.M. and Ishizuki, S. and Rieu, N.Q.},
    journal={The Astronomical Journal},
    volume={109},
    pages={1716--1723},
    year={1995}
  }

  @article{jackson1996apj,
    title={ApJ, 456},
    author={Jackson, JM and Heyer, MH and Paglione, TAD and Bolatto, AD},
    journal={L91 First citation in article| CrossRef link| IOP Article| Abstract at Astrophysics Data System},
    year={1996}
  }

  @article{paglione1995apj,
    title={ApJ, 454},
    author={Paglione, TAD and Tosaki, T. and Jackson, JM},
    journal={L117 First citation in article| IOP Article| CrossRef link| Abstract at Astrophysics Data System},
    year={1995}
  }

  @article{paglione1716nguyen,
    title={Nguyen-Q-Rieu 1995},
    author={Paglione, TAD and Jackson, JM and Ishizuki, S.},
    journal={AJ},
    volume={109},
    pages={1716},
    year={1716}
  }

  @article{kraemer2000properties,
    title={Properties of the Photodissociated Gas in NGC 6334},
    author={Kraemer, K.E. and Jackson, J.M. and Lane, A.P. and Paglione, T.A.D.},
    journal={The Astrophysical Journal},
    volume={542},
    pages={946},
    year={2000},
    publisher={IOP Publishing}
  }

  @article{smith2000measurements,
    title={Measurements of dynamic pointing variations of a large radio telescope},
    author={Smith, D.R. and Paglione, T.A.D. and Lovell, A.J. and Ukita, N. and Matsuo, H.},
    journal={Proceedings of SPIE},
    volume={4015},
    pages={467},
    year={2000}
  }

  @inproceedings{paglione2002cn,
    title={CN/HCN: A Global Indicator of Star Formation?},
    author={Paglione, TAD and Jackson, JM and Bergin, EA},
    booktitle={Bulletin of the American Astronomical Society},
    volume={34},
    pages={1229},
    year={2002}
  }

  @article{smolcic2010erratum,
    title={ERRATUM},
    author={Smolcic, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{\^\i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others},
    journal={The Astrophysical Journal},
    volume={708},
    pages={909},
    year={2010}
  }

  @article{smolvcic2010erratum,
    title={ERRATUM},
    author={Smol{\v{c}}i{\'c}, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{\^\i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others},
    journal={The Astrophysical Journal},
    volume={708},
    pages={909},
    year={2010},
    publisher={IOP Publishing}
  }

  @article{blom1999gamma,
    title={Gamma-Rays from Starbursts and M31},
    author={Blom, JJ and Paglione, TAD and Carrami{\~n}ana, A.},
    journal={Astrophysical Letters and Communications},
    volume={39},
    pages={169},
    year={1999}
  }

  @article{paglione2001mapping,
    title={A mapping survey of the (CO)-C-13 and (CO)-C-12 emission in galaxies},
    author={Paglione, TAD and Wall, WF and Young, JS and Heyer, MH and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.},
    year={2001}
  }

  @article{paglionesource,
    title={The Source of Diffuse Gamma-rays from the Seyfert/Starburst NGC 4945},
    author={Paglione, T.A.D. and Georganopoulos, M. and Hunt-Walker, N.}
  }

  @article{smoli2009cosmic,
    title={COSMIC EVOLUTION OF RADIO SELECTED ACTIVE GALACTIC NUCLEI IN THE COSMOS FIELDBased on observations with the National Radio Astronomy Observatory which is a facility of the National Science Foundation operated under cooperative agreement by Associated Universities, Inc.},
    author={Smoli, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{\^\i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others},
    journal={Astrophysical Journal},
    volume={696},
    number={1},
    pages={24},
    year={2009}
  }

  @inproceedings{spergel2002utilizing,
    title={Utilizing the light curves of binary stars in undergraduate and secondary school education},
    author={Spergel, M. and Paglione, T. and Paczynski, B.},
    booktitle={34th COSPAR Scientific Assembly},
    volume={34},
    pages={3142},
    year={2002}
  }

  @article{paglione1997properties,
    title={The properties of the dense gas in the nuclei of spiral galaxies},
    author={Paglione, T.A.D.},
    year={1997}
  }

  @inproceedings{paglione1993observations,
    title={Observations of the CS J= 1-> 0 Line in Galaxies},
    author={Paglione, TAD and Jackson, JM and Ishizuki, S.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={25},
    pages={1328},
    year={1993}
  }

  @article{paglioneumigs,
    title={UMIGS Home},
    author={Paglione, TAD and Wall, WF and Heyer, MH}
  }

  @inproceedings{paglione2004molecular,
    title={Molecular Photodissociation Regions in NGC 253},
    author={Paglione, T.},
    booktitle={The Neutral ISM in Starburst Galaxies},
    volume={320},
    pages={47},
    year={2004}
  }

  @inproceedings{paglione2002york,
    title={The York College observatory outreach program},
    author={Paglione, T. and Spergel, M.},
    booktitle={34th COSPAR Scientific Assembly},
    volume={34},
    pages={3144},
    year={2002}
  }

  @inproceedings{paglione2010diffuse,
    title={Diffuse Gamma-rays from Star Forming Galaxies},
    author={Paglione, T. and Crocker, M. and Hunt-Walker, N.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={42},
    pages={248},
    year={2010}
  }

  @article{bertsch1995diffuse,
    title={Diffuse Gamma-Ray Emission from the Starburst Galaxy NGC 253},
    author={Bertsch, D.L. and Paglione, T.A.D. and Marscher, A.P. and Jackson, J.M.},
    journal={NASA},
    number={19980019305},
    year={1995}
  }

  @inproceedings{bolatto1996dense,
    title={The Dense Interstellar Medium in the Central 600 PC of the Milky way},
    author={Bolatto, AD and Paglione, TAD and Jackson, JM and Heyer, MH},
    booktitle={Revista Mexicana de Astronomia y Astrofisica Conference Series},
    volume={4},
    pages={120},
    year={1996}
  }

  @inproceedings{yam1998properties,
    title={The properties of the dense molecular gas in the Galactic center},
    author={Yam, O. and Paglione, TAD and Jackson, JM and Bolatto, AD},
    booktitle={IX Latin American Regional IAU Meeting,},
    volume={1},
    pages={80},
    year={1998}
  }

  @inproceedings{liu2005local,
    title={The Local Starburst Galaxy Luminosity Function In The COSMOS 2 Square Degree Field},
    author={Liu, CT and Paglione, TAD and Tribiano, S. and Tyson, ND and Collaboration, C.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={37},
    pages={1245},
    year={2005}
  }

  @inproceedings{paglione1999umass,
    title={The UMass/INAOE Galaxy Survey},
    author={Paglione, TAD and Heyer, MH and Young, JS and Belniak, M. and Cartel, N. and Cameron, H. and Goldstein, M. and Gruol, M. and Kaufman, Z. and Litchfield, S. and others},
    booktitle={Bulletin of the American Astronomical Society},
    volume={31},
    pages={892},
    year={1999}
  }

  @article{paglione2001mapping,
    title={Mapping 13CO and 12CO in Galaxies},
    author={Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.},
    journal={The Astrophysical Journal Supplement Series},
    volume={135},
    pages={183--200},
    year={2001},
    publisher={Institute of Physics Publishing}
  }

  @article{jackson1993submillimeter,
    title={Submillimeter HCN and HCO+ lines in galaxies.},
    author={Jackson, J.M. and Paglione, T.A. and Carlstrom, J.E. and others},
    journal={Star formation, galaxies and the interstellar medium: proceedings of the 4th EIPC Astrophysical Workshop held at the Elba International Physics Center, Marciana Marina, Elba Island, Italy, June 1-6, 1992},
    pages={177},
    year={1993},
    publisher={Cambridge Univ Pr}
  }

  @article{paglione2012properties,
    title={Properties of Nearby Starburst Galaxies Based on their Diffuse Gamma-ray Emission},
    author={Paglione, T.A.D. and Abrahams, R.D.},
    journal={Arxiv preprint arXiv:1206.3530},
    year={2012}
  }

  @inproceedings{paglione1996dense,
    title={Dense Molecular Gas in the Central 630 Parsecs of the Milky Way},
    author={Paglione, T. and Jackson, J. and Heyer, M. and Bolatto, A.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={28},
    pages={888},
    year={1996}
  }

  @inproceedings{paglione2002urban,
    title={An Urban Observatory for Research, Education and Outreach},
    author={Paglione, TAD and Spergel, M. and Schlein, J. and Denecke, E.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={34},
    pages={1106},
    year={2002}
  }

  @inproceedings{paglione1997tracing,
    title={Tracing the Mass of Dense Gas in Giant Molecular Clouds},
    author={Paglione, TAD and Yam, O. and Heyer, MH and Jackson, JM},
    booktitle={Bulletin of the American Astronomical Society},
    volume={29},
    pages={785},
    year={1997}
  }

  @inproceedings{tribiano2005evolution,
    title={Evolution of Clustering of Starburst Galaxies in the COSMOS Field},
    author={Tribiano, SM and Paglione, TAD and Shopbell, PL and Capek, P. and Liu, C. and Tyson, ND and COSMOS, T.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={37},
    pages={1245},
    year={2005}
  }

  @article{smoli2009dust,
    title={THE DUST-UNBIASED COSMIC STAR-FORMATION HISTORY FROM THE 20 CM VLA-COSMOS SURVEYBased on observations with the National Radio Astronomy Observatory which is a facility of the National Science Foundation operated under cooperative agreement by Associated Universities, Inc.},
    author={Smoli, V. and Schinnerer, E. and Zamorani, G. and Bell, EF and Bondi, M. and Carilli, CL and Ciliegi, P. and Mobasher, B. and Paglione, T. and Scodeggio, M. and others},
    journal={Astrophysical Journal},
    volume={690},
    number={1},
    pages={610},
    year={2009}
  }

  @article{paglionesession,
    title={Session 47. Between the Stars I: The ISM, Galactic and Extragalactic Display, Tuesday, June 1, 1999, 10: 00am-7: 00pm, Southwest Exhibit Hall},
    author={Paglione, TAD and Heyer, MH and Young, JS and Belniak, M. and Cartel, N. and Cameron, H. and Goldstein, M. and Gruol, M. and Kaufman, Z. and Litchfield, S. and others}
  }

  @inproceedings{paglione1997distribution,
    title={The Distribution of Molecular Gas in the Starburst Galaxy NGC 253},
    author={Paglione, TAD and Yam, O. and Tosaki, T. and Jackson, JM},
    booktitle={Bulletin of the American Astronomical Society},
    volume={29},
    pages={1247},
    year={1997}
  }

  @inproceedings{liu2006faint,
    title={The Faint End Slope Of Starburst Galaxy Luminosity Functions In The COSMOS 2-Square Degree Field},
    author={Liu, C. and Capak, P. and Mobasher, B. and Paglione, TA and Rich, RM and Scoville, NZ and Tribiano, SM and Tyson, N. and Collaboration, C.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={38},
    pages={1005},
    year={2006}
  }

  @inproceedings{kraemer1995molecular,
    title={Molecular, atomic, and ionized gas in the NGC 6334 star forming region},
    author={Kraemer, KE and Jackson, JM and Paglione, TAD and Lane, AP},
    booktitle={From Gas to Stars to Dust},
    volume={73},
    pages={83--86},
    year={1995}
  }

  @inproceedings{jackson1993hcn,
    title={HCN in the Central 300 PC of the Galaxy},
    author={Jackson, JM and Heyer, MH and Paglione, TAD},
    booktitle={Bulletin of the American Astronomical Society},
    volume={25},
    pages={1467},
    year={1993}
  }

  @inproceedings{paglione2006luminosity,
    title={The Luminosity Function of COSMOS Radio Sources},
    author={Paglione, T. and Smolcic, V. and Schinnerer, E. and Salvador, K. and Ciliegi, P. and Bondi, M. and Tribiano, S.},
    booktitle={Bulletin of the American Astronomical Society},
    volume={38},
    pages={1005},
    year={2006}
  }

  @article{smoli2010erratum,
    title={ERRATUM:" COSMIC EVOLUTION OF RADIO SELECTED ACTIVE GALACTIC NUCLEI IN THE COSMOS FIELD"(2009, ApJ, 696, 24)},
    author={Smoli, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{\^\i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others},
    journal={Astrophysical Journal},
    volume={708},
    number={1},
    pages={909},
    year={2010}
  }
`;

const output =
[ { entryType: 'PREAMBLE', entry: '"ewcommand{oopsort}[1]{}"' },
  { entryType: 'COMMENT', entry: '"slkdjflksdjflkdsjf"' },
  { citationKey: 'paglione2001mapping',
    entryType: 'article',
    entryTags:
     { title: 'A Mapping Survey of the 13CO and 12CO Emission in Galaxies',
       author: 'Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.',
       journal: 'The Astrophysical Journal Supplement Series',
       volume: '135',
       pages: '183',
       year: '2001',
       publisher: 'IOP Publishing' } },
  { citationKey: 'jackson418nguyen',
    entryType: 'article',
    entryTags:
     { title: 'Nguyen-Q-Rieu. 1993',
       author: 'Jackson, J.M. and Paglione, T.A.D. and Ishizuki, S.',
       journal: 'ApJ',
       volume: '418',
       pages: 'L13' } },
  { citationKey: 'jackson1996hcn',
    entryType: 'article',
    entryTags:
     { title: 'HCN and CO in the Central 630 Parsecs of the Galaxy',
       author: 'Jackson, J.M. and Heyer, M.H. and Paglione, T.A.D. and Bolatto, A.D.',
       journal: 'The Astrophysical Journal Letters',
       volume: '456',
       pages: 'L91',
       year: '1996',
       publisher: 'IOP Publishing' } },
  { citationKey: 'paglione1996diffuse',
    entryType: 'article',
    entryTags:
     { title: 'Diffuse Gamma-Ray Emission from the Starburst Galaxy NGC 253',
       author: 'Paglione, T.A.D. and Marscher, A.P. and Jackson, J.M. and Bertsch, D.L.',
       journal: 'The Astrophysical Journal',
       volume: '460',
       pages: '295',
       year: '1996' } },
  { citationKey: 'paglione1995distribution',
    entryType: 'article',
    entryTags:
     { title: 'The Distribution of the Dense Clouds in the Starburst Nucleus of NGC 253',
       author: 'Paglione, T.A.D. and Tosaki, T. and Jackson, J.M.',
       journal: 'The Astrophysical Journal Letters',
       volume: '454',
       pages: 'L117',
       year: '1995',
       publisher: 'IOP Publishing' } },
  { citationKey: 'blom1999diffuse',
    entryType: 'article',
    entryTags:
     { title: 'Diffuse gamma-ray emission from starburst galaxies and M31',
       author: 'Blom, J.J. and Paglione, T.A.D. and Carrami{~n}ana, A.',
       journal: 'The Astrophysical Journal',
       volume: '516',
       pages: '744',
       year: '1999',
       publisher: 'IOP Publishing' } },
  { citationKey: 'smolvcic2009cosmic',
    entryType: 'article',
    entryTags:
     { title: 'Cosmic evolution of radio selected active galactic nuclei in the COSMOS field',
       author: 'Smol{\u000b{c}}i{\'c}, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{^i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others',
       journal: 'The Astrophysical Journal',
       volume: '696',
       pages: '24',
       year: '2009',
       publisher: 'IOP Publishing' } },
  { citationKey: 'paglione1997average',
    entryType: 'article',
    entryTags:
     { title: 'The average properties of the dense molecular gas in galaxies',
       author: 'Paglione, T.A.D. and Jackson, J.M. and Ishizuki, S.',
       journal: 'The Astrophysical Journal',
       volume: '484',
       pages: '656',
       year: '1997',
       publisher: 'IOP Publishing' } },
  { citationKey: 'jackson1995submillimeter',
    entryType: 'article',
    entryTags:
     { title: 'Submillimeter HCN and HCO (+) emission from galaxies',
       author: 'Jackson, J.M. and Paglione, T.A.D. and Carlstrom, J.E. and Rieu, N.Q.',
       journal: 'The Astrophysical Journal',
       volume: '438',
       pages: '695--701',
       year: '1995' } },
  { citationKey: 'paglione1998interpreting',
    entryType: 'article',
    entryTags:
     { title: 'Interpreting the HCN/CO intensity ratio in the galactic center',
       author: 'Paglione, T.A.D. and Jackson, J.M. and Bolatto, A.D. and Heyer, M.H.',
       journal: 'The Astrophysical Journal',
       volume: '493',
       pages: '680',
       year: '1998',
       publisher: 'IOP Publishing' } },
  { citationKey: 'smolvcic2009dust',
    entryType: 'article',
    entryTags:
     { title: 'The Dust-Unbiased Cosmic Star-Formation History from the 20 CM VLA-COSMOS Survey',
       author: 'Smol{\u000b{c}}i{\'c}, V. and Schinnerer, E. and Zamorani, G. and Bell, EF and Bondi, M. and Carilli, CL and Ciliegi, P. and Mobasher, B. and Paglione, T. and Scodeggio, M. and others',
       journal: 'The Astrophysical Journal',
       volume: '690',
       pages: '610',
       year: '2009',
       publisher: 'IOP Publishing' } },
  { citationKey: 'jackson1993dense',
    entryType: 'article',
    entryTags:
     { title: 'Dense molecular gas toward the nucleus of the Seyfert galaxy NGC 1068',
       author: 'Jackson, J.M. and Paglione, T.A.D. and Ishizuki, S. and others',
       journal: 'The Astrophysical Journal',
       volume: '418',
       pages: 'L13',
       year: '1993' } },
  { citationKey: 'paglione2004structure',
    entryType: 'article',
    entryTags:
     { title: 'The structure, kinematics, and physical properties of the molecular gas in the starburst nucleus of NGC 253',
       author: 'Paglione, T.A.D. and Yam, O. and Tosaki, T. and Jackson, J.M.',
       journal: 'The Astrophysical Journal',
       volume: '611',
       pages: '835',
       year: '2004',
       publisher: 'IOP Publishing' } },
  { citationKey: 'kraemer19972000',
    entryType: 'article',
    entryTags:
     { title: 'A 2000 M Rotating Molecular Disk Around NGC 6334A',
       author: 'Kraemer, K.E. and Jackson, J.M. and Paglione, T.A.D. and Bolatto, A.D.',
       journal: 'The Astrophysical Journal',
       volume: '478',
       pages: '614',
       year: '1997',
       publisher: 'IOP Publishing' } },
  { citationKey: 'liu2008faint',
    entryType: 'article',
    entryTags:
     { title: 'The faint-end slopes of galaxy luminosity functions in the COSMOS field',
       author: 'Liu, C.T. and Capak, P. and Mobasher, B. and Paglione, T.A.D. and Rich, R.M. and Scoville, N.Z. and Tribiano, S.M. and Tyson, N.D.',
       journal: 'The Astrophysical Journal',
       volume: '672',
       pages: '198',
       year: '2008',
       publisher: 'IOP Publishing' } },
  { citationKey: 'paglione1995first',
    entryType: 'article',
    entryTags:
     { title: 'First Observations of extragalactic CSJ= 1 goes to 0',
       author: 'Paglione, T.A.D. and Jackson, J.M. and Ishizuki, S. and Rieu, N.Q.',
       journal: 'The Astronomical Journal',
       volume: '109',
       pages: '1716--1723',
       year: '1995' } },
  { citationKey: 'jackson1996apj',
    entryType: 'article',
    entryTags:
     { title: 'ApJ, 456',
       author: 'Jackson, JM and Heyer, MH and Paglione, TAD and Bolatto, AD',
       journal: 'L91 First citation in article| CrossRef link| IOP Article| Abstract at Astrophysics Data System',
       year: '1996' } },
  { citationKey: 'paglione1995apj',
    entryType: 'article',
    entryTags:
     { title: 'ApJ, 454',
       author: 'Paglione, TAD and Tosaki, T. and Jackson, JM',
       journal: 'L117 First citation in article| IOP Article| CrossRef link| Abstract at Astrophysics Data System',
       year: '1995' } },
  { citationKey: 'paglione1716nguyen',
    entryType: 'article',
    entryTags:
     { title: 'Nguyen-Q-Rieu 1995',
       author: 'Paglione, TAD and Jackson, JM and Ishizuki, S.',
       journal: 'AJ',
       volume: '109',
       pages: '1716',
       year: '1716' } },
  { citationKey: 'kraemer2000properties',
    entryType: 'article',
    entryTags:
     { title: 'Properties of the Photodissociated Gas in NGC 6334',
       author: 'Kraemer, K.E. and Jackson, J.M. and Lane, A.P. and Paglione, T.A.D.',
       journal: 'The Astrophysical Journal',
       volume: '542',
       pages: '946',
       year: '2000',
       publisher: 'IOP Publishing' } },
  { citationKey: 'smith2000measurements',
    entryType: 'article',
    entryTags:
     { title: 'Measurements of dynamic pointing variations of a large radio telescope',
       author: 'Smith, D.R. and Paglione, T.A.D. and Lovell, A.J. and Ukita, N. and Matsuo, H.',
       journal: 'Proceedings of SPIE',
       volume: '4015',
       pages: '467',
       year: '2000' } },
  { citationKey: 'paglione2002cn',
    entryType: 'inproceedings',
    entryTags:
     { title: 'CN/HCN: A Global Indicator of Star Formation?',
       author: 'Paglione, TAD and Jackson, JM and Bergin, EA',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '34',
       pages: '1229',
       year: '2002' } },
  { citationKey: 'smolcic2010erratum',
    entryType: 'article',
    entryTags:
     { title: 'ERRATUM',
       author: 'Smolcic, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{^i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others',
       journal: 'The Astrophysical Journal',
       volume: '708',
       pages: '909',
       year: '2010' } },
  { citationKey: 'smolvcic2010erratum',
    entryType: 'article',
    entryTags:
     { title: 'ERRATUM',
       author: 'Smol{\u000b{c}}i{\'c}, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{^i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others',
       journal: 'The Astrophysical Journal',
       volume: '708',
       pages: '909',
       year: '2010',
       publisher: 'IOP Publishing' } },
  { citationKey: 'blom1999gamma',
    entryType: 'article',
    entryTags:
     { title: 'Gamma-Rays from Starbursts and M31',
       author: 'Blom, JJ and Paglione, TAD and Carrami{~n}ana, A.',
       journal: 'Astrophysical Letters and Communications',
       volume: '39',
       pages: '169',
       year: '1999' } },
  { citationKey: 'paglione2001mapping',
    entryType: 'article',
    entryTags:
     { title: 'A mapping survey of the (CO)-C-13 and (CO)-C-12 emission in galaxies',
       author: 'Paglione, TAD and Wall, WF and Young, JS and Heyer, MH and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.',
       year: '2001' } },
  { citationKey: 'paglionesource',
    entryType: 'article',
    entryTags:
     { title: 'The Source of Diffuse Gamma-rays from the Seyfert/Starburst NGC 4945',
       author: 'Paglione, T.A.D. and Georganopoulos, M. and Hunt-Walker, N.' } },
  { citationKey: 'smoli2009cosmic',
    entryType: 'article',
    entryTags:
     { title: 'COSMIC EVOLUTION OF RADIO SELECTED ACTIVE GALACTIC NUCLEI IN THE COSMOS FIELDBased on observations with the National Radio Astronomy Observatory which is a facility of the National Science Foundation operated under cooperative agreement by Associated Universities, Inc.',
       author: 'Smoli, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{^i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others',
       journal: 'Astrophysical Journal',
       volume: '696',
       number: '1',
       pages: '24',
       year: '2009' } },
  { citationKey: 'spergel2002utilizing',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Utilizing the light curves of binary stars in undergraduate and secondary school education',
       author: 'Spergel, M. and Paglione, T. and Paczynski, B.',
       booktitle: '34th COSPAR Scientific Assembly',
       volume: '34',
       pages: '3142',
       year: '2002' } },
  { citationKey: 'paglione1997properties',
    entryType: 'article',
    entryTags:
     { title: 'The properties of the dense gas in the nuclei of spiral galaxies',
       author: 'Paglione, T.A.D.',
       year: '1997' } },
  { citationKey: 'paglione1993observations',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Observations of the CS J= 1-> 0 Line in Galaxies',
       author: 'Paglione, TAD and Jackson, JM and Ishizuki, S.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '25',
       pages: '1328',
       year: '1993' } },
  { citationKey: 'paglioneumigs',
    entryType: 'article',
    entryTags:
     { title: 'UMIGS Home',
       author: 'Paglione, TAD and Wall, WF and Heyer, MH' } },
  { citationKey: 'paglione2004molecular',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Molecular Photodissociation Regions in NGC 253',
       author: 'Paglione, T.',
       booktitle: 'The Neutral ISM in Starburst Galaxies',
       volume: '320',
       pages: '47',
       year: '2004' } },
  { citationKey: 'paglione2002york',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The York College observatory outreach program',
       author: 'Paglione, T. and Spergel, M.',
       booktitle: '34th COSPAR Scientific Assembly',
       volume: '34',
       pages: '3144',
       year: '2002' } },
  { citationKey: 'paglione2010diffuse',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Diffuse Gamma-rays from Star Forming Galaxies',
       author: 'Paglione, T. and Crocker, M. and Hunt-Walker, N.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '42',
       pages: '248',
       year: '2010' } },
  { citationKey: 'bertsch1995diffuse',
    entryType: 'article',
    entryTags:
     { title: 'Diffuse Gamma-Ray Emission from the Starburst Galaxy NGC 253',
       author: 'Bertsch, D.L. and Paglione, T.A.D. and Marscher, A.P. and Jackson, J.M.',
       journal: 'NASA',
       number: '19980019305',
       year: '1995' } },
  { citationKey: 'bolatto1996dense',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The Dense Interstellar Medium in the Central 600 PC of the Milky way',
       author: 'Bolatto, AD and Paglione, TAD and Jackson, JM and Heyer, MH',
       booktitle: 'Revista Mexicana de Astronomia y Astrofisica Conference Series',
       volume: '4',
       pages: '120',
       year: '1996' } },
  { citationKey: 'yam1998properties',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The properties of the dense molecular gas in the Galactic center',
       author: 'Yam, O. and Paglione, TAD and Jackson, JM and Bolatto, AD',
       booktitle: 'IX Latin American Regional IAU Meeting,',
       volume: '1',
       pages: '80',
       year: '1998' } },
  { citationKey: 'liu2005local',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The Local Starburst Galaxy Luminosity Function In The COSMOS 2 Square Degree Field',
       author: 'Liu, CT and Paglione, TAD and Tribiano, S. and Tyson, ND and Collaboration, C.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '37',
       pages: '1245',
       year: '2005' } },
  { citationKey: 'paglione1999umass',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The UMass/INAOE Galaxy Survey',
       author: 'Paglione, TAD and Heyer, MH and Young, JS and Belniak, M. and Cartel, N. and Cameron, H. and Goldstein, M. and Gruol, M. and Kaufman, Z. and Litchfield, S. and others',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '31',
       pages: '892',
       year: '1999' } },
  { citationKey: 'paglione2001mapping',
    entryType: 'article',
    entryTags:
     { title: 'Mapping 13CO and 12CO in Galaxies',
       author: 'Paglione, T.A.D. and Wall, WF and Young, J.S. and Heyer, M.H. and Richard, M. and Goldstein, M. and Kaufman, Z. and Nantais, J. and Perry, G.',
       journal: 'The Astrophysical Journal Supplement Series',
       volume: '135',
       pages: '183--200',
       year: '2001',
       publisher: 'Institute of Physics Publishing' } },
  { citationKey: 'jackson1993submillimeter',
    entryType: 'article',
    entryTags:
     { title: 'Submillimeter HCN and HCO+ lines in galaxies.',
       author: 'Jackson, J.M. and Paglione, T.A. and Carlstrom, J.E. and others',
       journal: 'Star formation, galaxies and the interstellar medium: proceedings of the 4th EIPC Astrophysical Workshop held at the Elba International Physics Center, Marciana Marina, Elba Island, Italy, June 1-6, 1992',
       pages: '177',
       year: '1993',
       publisher: 'Cambridge Univ Pr' } },
  { citationKey: 'paglione2012properties',
    entryType: 'article',
    entryTags:
     { title: 'Properties of Nearby Starburst Galaxies Based on their Diffuse Gamma-ray Emission',
       author: 'Paglione, T.A.D. and Abrahams, R.D.',
       journal: 'Arxiv preprint arXiv:1206.3530',
       year: '2012' } },
  { citationKey: 'paglione1996dense',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Dense Molecular Gas in the Central 630 Parsecs of the Milky Way',
       author: 'Paglione, T. and Jackson, J. and Heyer, M. and Bolatto, A.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '28',
       pages: '888',
       year: '1996' } },
  { citationKey: 'paglione2002urban',
    entryType: 'inproceedings',
    entryTags:
     { title: 'An Urban Observatory for Research, Education and Outreach',
       author: 'Paglione, TAD and Spergel, M. and Schlein, J. and Denecke, E.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '34',
       pages: '1106',
       year: '2002' } },
  { citationKey: 'paglione1997tracing',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Tracing the Mass of Dense Gas in Giant Molecular Clouds',
       author: 'Paglione, TAD and Yam, O. and Heyer, MH and Jackson, JM',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '29',
       pages: '785',
       year: '1997' } },
  { citationKey: 'tribiano2005evolution',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Evolution of Clustering of Starburst Galaxies in the COSMOS Field',
       author: 'Tribiano, SM and Paglione, TAD and Shopbell, PL and Capek, P. and Liu, C. and Tyson, ND and COSMOS, T.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '37',
       pages: '1245',
       year: '2005' } },
  { citationKey: 'smoli2009dust',
    entryType: 'article',
    entryTags:
     { title: 'THE DUST-UNBIASED COSMIC STAR-FORMATION HISTORY FROM THE 20 CM VLA-COSMOS SURVEYBased on observations with the National Radio Astronomy Observatory which is a facility of the National Science Foundation operated under cooperative agreement by Associated Universities, Inc.',
       author: 'Smoli, V. and Schinnerer, E. and Zamorani, G. and Bell, EF and Bondi, M. and Carilli, CL and Ciliegi, P. and Mobasher, B. and Paglione, T. and Scodeggio, M. and others',
       journal: 'Astrophysical Journal',
       volume: '690',
       number: '1',
       pages: '610',
       year: '2009' } },
  { citationKey: 'paglionesession',
    entryType: 'article',
    entryTags:
     { title: 'Session 47. Between the Stars I: The ISM, Galactic and Extragalactic Display, Tuesday, June 1, 1999, 10: 00am-7: 00pm, Southwest Exhibit Hall',
       author: 'Paglione, TAD and Heyer, MH and Young, JS and Belniak, M. and Cartel, N. and Cameron, H. and Goldstein, M. and Gruol, M. and Kaufman, Z. and Litchfield, S. and others' } },
  { citationKey: 'paglione1997distribution',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The Distribution of Molecular Gas in the Starburst Galaxy NGC 253',
       author: 'Paglione, TAD and Yam, O. and Tosaki, T. and Jackson, JM',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '29',
       pages: '1247',
       year: '1997' } },
  { citationKey: 'liu2006faint',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The Faint End Slope Of Starburst Galaxy Luminosity Functions In The COSMOS 2-Square Degree Field',
       author: 'Liu, C. and Capak, P. and Mobasher, B. and Paglione, TA and Rich, RM and Scoville, NZ and Tribiano, SM and Tyson, N. and Collaboration, C.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '38',
       pages: '1005',
       year: '2006' } },
  { citationKey: 'kraemer1995molecular',
    entryType: 'inproceedings',
    entryTags:
     { title: 'Molecular, atomic, and ionized gas in the NGC 6334 star forming region',
       author: 'Kraemer, KE and Jackson, JM and Paglione, TAD and Lane, AP',
       booktitle: 'From Gas to Stars to Dust',
       volume: '73',
       pages: '83--86',
       year: '1995' } },
  { citationKey: 'jackson1993hcn',
    entryType: 'inproceedings',
    entryTags:
     { title: 'HCN in the Central 300 PC of the Galaxy',
       author: 'Jackson, JM and Heyer, MH and Paglione, TAD',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '25',
       pages: '1467',
       year: '1993' } },
  { citationKey: 'paglione2006luminosity',
    entryType: 'inproceedings',
    entryTags:
     { title: 'The Luminosity Function of COSMOS Radio Sources',
       author: 'Paglione, T. and Smolcic, V. and Schinnerer, E. and Salvador, K. and Ciliegi, P. and Bondi, M. and Tribiano, S.',
       booktitle: 'Bulletin of the American Astronomical Society',
       volume: '38',
       pages: '1005',
       year: '2006' } },
  { citationKey: 'smoli2010erratum',
    entryType: 'article',
    entryTags:
     { title: 'ERRATUM:" COSMIC EVOLUTION OF RADIO SELECTED ACTIVE GALACTIC NUCLEI IN THE COSMOS FIELD"(2009, ApJ, 696, 24)',
       author: 'Smoli, V. and Zamorani, G. and Schinnerer, E. and Bardelli, S. and Bondi, M. and B{^i}rzan, L. and Carilli, CL and Ciliegi, P. and Elvis, M. and Impey, CD and others',
       journal: 'Astrophysical Journal',
       volume: '708',
       number: '1',
       pages: '909',
       year: '2010' } } ];
test('Paglione BibTeX should parse', t => t.deepEqual(output, bibtexParse.toJSON(input)));
