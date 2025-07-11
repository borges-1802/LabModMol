import React from 'react';
import { motion } from 'framer-motion';
import { Container, Title, Description, YearSection, YearTitle, YearLine, PublicationsGrid, PublicationTitleLink } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PublicationCard from '../../components/PublicationCard';

interface Publication {
    title: string;
    description: string;
    link: string;
}

interface PublicationsData {
    [key: string]: Publication[];
}

const Publication: React.FC = () => {
    // Substituir o array publications por artigos reais
    const publications: { description: string; link: string }[] = [
        {
            description: `<b>${React.createElement(
                PublicationTitleLink,
                { href: 'https://www.nature.com/articles/s41598-024-84697-2', target: '_blank', rel: 'noopener noreferrer', style: { fontWeight: 'bold' } },
                'In vitro assays identified thiohydantoins with anti-trypanosomatid activity and molecular modelling studies indicated possible selective CYP51 inhibition.'
            )}</b> CAMARGO, PRISCILA GOES ; SUZUKAWA, HELENA TIEMI ; PEREIRA, PATRÍCIA MORAIS LOPES ; SILVA, MARIANA LUIZA ; MACEDO JR, FERNANDO ; ALBUQUERQUE, Magaly Girão ; Rodrigues, Carlos Rangel ; YAMADA-OGATTA, SUELI FUMIE ; DA SILVA LIMA, CAMILO HENRIQUE ; BISPO, MARCELLE DE LIMA FERREIRA. Scientific Reports, v. 15, p. 1-10, 2025.`,
            link: 'https://www.nature.com/articles/s41598-024-84697-2'
        },
        {
            description: '<b>Thiourea as a Promising Scaffold for Development of Agents Toward TriTryp Diseases.</b> SOUZA, ALESSANDRA MENDONÇA TELES ; ABRAHIM\'VIEIRA, BÁRBARA DE A. ; ASSUMPÇÃO, PALOMA WETLER ; DA CONCEIÇÃO, RAISSA ALVES ; VIANA, GIL MENDES ; BEDOR, BÁRBARA ; CAVALCANTI, MILENA MOTA BASTOS ; DA SILVA HONORIO, THIAGO ; Rodrigues, Carlos Rangel ; CABRAL, Lucio Mendes. ChemistrySelect, v. 10, p. 1-10, 2025.',
            link: ''
        },
        {
            description: '<b>XGBMUT: Predicting the Functional Impact of Missense Mutations Using an Extreme Gradient Boost Classifier.</b> PEREIRA, GABRIEL RODRIGUES COUTINHO ; DA CONCEIÇÃO, LOIANE MENDONÇA ABRANTES ; ABRAHIM-VIEIRA, BÁRBARA DE AZEVEDO ; Rodrigues, Carlos Rangel ; CABRAL, Lucio Mendes ; COELHO, RICARDO LIMONGI FRANÇA ; DE MESQUITA, JOELMA FREIRE . ACS Omega, v. 10, p. 8349-8360, 2025.',
            link: ''
        },
        {
            description: '<b>Synthesis, in silico, and in vitro evaluation of 7-chloro-quinolines designed as myeloperoxidase inhibitors.</b> PEREIRA, GABRIEL RODRIGUES COUTINHO ; FRAGA, LETÍCIA DE SOUZA ; DE JESUS, ROMULO PEREIRA ; QUEIROZ, RAFAEL COMPAN ; LEITE, BEATRIZ DE FRIAS ; ALVES, MARINA AMARAL ; DE MESQUITA, JOELMA FREIRE ; DE SOUZA, ALESSANDRA MENDONÇA TELES ; DA SILVA, LEANDRO LOUBACK ; Rodrigues, Carlos Rangel ; CABRAL, Lucio Mendes ; ABRAHIM-VIEIRA, BARBARA DE AZEVEDO ; BARBOSA, MARIA LETICIA DE CASTRO . JOURNAL OF MOLECULAR STRUCTURE, v. 1312, p. 138528-1, 2024.',
            link: ''
        },
        {
            description: '<b>Evaluation of Silybin Nanoparticles against Liver Damage in Murine Schistosomiasis mansoni Infection.</b> VANZAN, DANIEL FIGUEIREDO ; GOMA, ESTER PUNA ; LOCATELLI, FERNANDA RESENDE ; HONORIO, THIAGO DA SILVA ; FURTADO, PRISCILA DE SOUZA ; Rodrigues, Carlos Rangel ; DE SOUSA, VALERIA PEREIRA ; MATA DOS SANTOS, HILTON ANTÔNIO ; DO CARMO, FLÁVIA ALMADA ; SIMON, ALICE ; PYRRHO, ALEXANDRE DOS SANTOS ; RIBEIRO, ANTÓNIO JOSÉ ; CABRAL, Lucio Mendes . PHARMACEUTICS, v. 16, p. 618-1, 2024. Citações:1|1',
            link: ''
        },
        {
            description: '<b>Novel naphthoquinone-1H-1,2,3-triazole hybrids: Design, synthesis and evaluation as inductors of ROS-mediated apoptosis in the MCF-7 cells.</b> DE SOUZA, ACÁCIO S. ; DIAS, DEBORAH S. ; RIBEIRO, RUAN C.B. ; COSTA, DORA C.S. ; DE MORAES, MATHEUS G. ; PINHO, DAVID R. ; MASSET, MARIA E.G. ; MARINS, LAÍS M. ; VALLE, SANDY P. ; DE CARVALHO, CLÁUDIO J.C. ; DE CARVALHO, GUSTAVO S.G. ; MELLO, ANGÉLICA LAURIA N. ; SOLA-PENNA, MAURO ; PALMEIRA-MELLO, MARCOS V. ; CONCEIÇÃO, RAISSA A. ; Rodrigues, Carlos R. ; SOUZA, Alessandra M.t. ; FOREZI, LUANA DA S.M. ; ZANCAN, PATRICIA ; FERREIRA, Vitor F. ; et.al . BIOORGANIC & MEDICINAL CHEMISTRY, v. 102, p. 117671-1, 2024. Citações:9|4',
            link: ''
        },
        {
            description: '<b>Py-CoMFA, docking, and molecular dynamics simulations of Leishmania (L.) amazonensis arginase inhibitors.</b> CAMARGO, PRISCILA GOES ; DOS SANTOS, CARINE RIBEIRO ; GIRÃO ALBUQUERQUE, MAGALY ; RANGEL RODRIGUES, CARLOS ; LIMA, CAMILO HENRIQUE DA SILVA . Scientific Reports, v. 14, p. 23, 2024. Citações:3',
            link: ''
        },
        {
            description: '<b>Exploring Urease Inhibition by Coumarin Derivatives through in silico and in vitro Methods.</b> FABRIS, MARCIÉLI ; CAMARGO, PRISCILA ; SILVA, MARIANA ; SILVA, TALIS ; MACHADO, SÉRGIO ; RODRIGUES, CARLOS ; LIMA, CAMILO ; ALBUQUERQUE, MAGALY ; BISPO, MARCELLE . JOURNAL OF THE BRAZILIAN CHEMICAL SOCIETY, v. 23, p. 1, 2024.',
            link: ''
        },
        {
            description: '<b>Statine-based peptidomimetic compounds as inhibitors for SARS-CoV-2 main protease (SARS-CoV-2 Mpro).</b> AZEVEDO, PEDRO HENRIQUE R. DE A. ; CAMARGO, PRISCILA G. ; CONSTANT, LARISSA E. C. ; COSTA, STEPHANY DA S. ; SILVA, CELIMAR SINÉZIA ; ROSA, ALICE S. ; SOUZA, DANIEL D. C. ; TUCCI, AMANDA R. ; FERREIRA, VIVIAN N. S. ; OLIVEIRA, THAMARA KELCYA F. ; BORBA, NATHALIA R. R. ; Rodrigues, Carlos R. ; ALBUQUERQUE, Magaly G. ; Dias, Luiza R. S. ; GARRETT, RAFAEL ; MIRANDA, MILENE D. ; ALLONSO, DIEGO ; LIMA, CAMILO HENRIQUE DA S. ; MURI, ESTELA MARIS F. . Scientific Reports, v. 14, p. 23, 2024. Citações:2|2',
            link: ''
        },
        {
            description: '<b>N, N\'-disubstituted Ureas as Novel Antiplatelet Agents: Synthesis, Pharmacological Evaluation and In Silico Studies.</b> FURTADO, PRISCILA DE SOUZA ; VIANA, GIL MENDES ; DE OLIVEIRA, ALANA AGNES SILVA CAMARGO ; RABELO, VITOR WON-HELD ; CERQUEIRA, INGRYD WENDERROSCHY ; PASCHOAL, CAROLINE REIS SANTIAGO ; HONÓRIO, THIAGO DA SILVA ; SIMON, ALICE ; Rodrigues, Carlos Rangel ; ABREU, Paula Alvarez ; CABRAL, Lucio Mendes ; SATHLER, PLÍNIO CUNHA . CURRENT MEDICINAL CHEMISTRY, v. 31, p. 34, 2024.',
            link: ''
        },
        {
            description: '<b>Synthesis and Structure-Activity Relationship of Thiourea Derivatives Against Leishmania amazonensis.</b> VIANA, GIL MENDES ; CUNHA-JUNIOR, EDÉZIO FERREIRA DA ; ASSUMPÇÃO, PALOMA WETLER MEIRELES CARREIROS ; REZENDE, MARIANNE GRILO ; EMILIANO, YAGO SOUSA DOS SANTOS ; SOARES, LAIZA MARIA DA SILVA ; PEREIRA, GABRIEL RODRIGUES COUTINHO ; Rodrigues, Carlos Rangel ; CABRAL, Lucio Mendes ; TORRES-SANTOS, EDUARDO CAIO . PHARMACEUTICALS, v. 17, p. 1573, 2024.',
            link: ''
        },
        {
            description: '<b>Effect of a thiohydantoin salt derived from -Arginine on Leishmania amazonensis and infected cells: Insights from biological effects to molecular docking interactions.</b> DA SILVA BORTOLETI, BRUNA TACIANE ; CAMARGO, PRISCILA GOES ; GONÇALVES, MANOELA DAIELE ; TOMIOTTO-PELLISSIER, FERNANDA ; SILVA, TAYLON FELIPE ; CONCATO, VIRGINIA MARCIA ; DETONI, MARIANA BARBOSA ; BIDÓIA, DANIELLE LARAZIN ; DA SILVA LIMA, CAMILO HENRIQUE ; Rodrigues, Carlos Rangel ; BISPO, MARCELLE DE LIMA FERREIRA ; DE MACEDO, FERNANDO CESAR ; CONCHON-COSTA, IVETE ; MIRANDA-SAPLA, MILENA MENEGAZZO ; WOWK, PRYSCILLA FANINI ; PAVANELLI, WANDER ROGÉRIO . CHEMICO-BIOLOGICAL INTERACTIONS, v. 403, p. 111216, 2024. Citações:1|1',
            link: ''
        },
        {
            description: '<b>4-oxoquinoline-3-carboxamide acyclonucleoside phosphonates hybrids: Human MCF-7 breast cancer cell death induction by oxidative stress-promoting and in silico ADMET studies.</b> MACHADO, THAYNÁ R. ; FARO, LETÍCIA V. ; MELLO, ANGÉLICA L.DO NASCIMENTO ; SILVA, DAVID DE O. ; ABRAHIM-VIEIRA, BÁRBARA DE A. ; Rodrigues, Carlos R. ; SILVA, RITA HEMANUELLE S. ; JUNIOR, CLAUDIO S.VIANA ; SOLA-PENNA, MAURO ; BOECHAT, FERNANDA DA C.S. ; DE SOUZA, MARCOS C. ; ZANCAN, PATRICIA ; de Souza, Maria Cecília B.V. ; de Souza, Alessandra M.T. . JOURNAL OF MOLECULAR STRUCTURE, v. 1276, p. 134542, 2023. Citações:5|4',
            link: ''
        },
        {
            description: '<b>Development of SEDDS formulation containing caffeine for dermal delivery.</b> DE ALMEIDA, IGOR DE ANDRADE ASSUNÇÃO ; HONÓRIO, THIAGO DA SILVA ; DO CARMO, FLAVIA ALMADA ; DE FREITAS, ZAIDA MARIA FARIA ; SIMON, ALICE ; RANGEL RODRIGUES, CARLOS ; PEREIRA DE SOUSA, VALERIA ; CABRAL, Lucio Mendes ; DE ABREU, LETÍCIA COLI LOUVISSE . INTERNATIONAL JOURNAL OF COSMETIC SCIENCE, v. 1, p. 1-10, 2023. Citações:2|3',
            link: ''
        },
        {
            description: '<b>Aryl hydrocarbon receptor as a therapeutical target of environmentally induced skin conditions.</b> ACCIOLI, CAROLINE DE ALMEIDA FREITAS ; DA SILVA, MICHELLE SABRINA ; SANTOS, BIANCA ALOISE MANEIRA CORRÊA ; Rodrigues, Carlos Rangel . MOLECULAR PHARMACOLOGY, v. 1, p. MOLPHARM-MR-20-10, 2023. Citações:6|6',
            link: ''
        },
        {
            description: '<b>Physiologically based pharmacokinetic modelling of semaglutide in children and adolescents with healthy and obese body weights.</b> MACHADO, THAYNÁ ROCCO ; HONORIO, THIAGO ; SOUZA DOMINGOS, THAISA F. ; CANDIDO DE PAULA, DAILANE DA SILVA ; CABRAL, Lucio Mendes ; Rodrigues, Carlos R. ; ABRAHIM\'VIEIRA, BÁRBARA A. ; TELES DE SOUZA, ALESSANDRA MENDONÇA . BRITISH JOURNAL OF CLINICAL PHARMACOLOGY, v. 1, p. 1, 2023. Citações:5|3',
            link: ''
        },
        {
            description: '<b>Chitosan-based hydrotalcite nanostructured membranes containing sodium alendronate for guided bone regeneration therapy.</b> SOUZA, FÁBIO LUIZ COSTA DE ; SIMON, ALICE ; BARCELOS D?ORNELLAS, EVANDRO LÚCIO ; SILVA, RAPHAEL FERREIRA DA ; COVAS, ANA CAROLINA MATTOS ; Rodrigues, Carlos Rangel ; SILVA, LUIZ CLAUDIO RODRIGUES PEREIRA DA ; CARMO, FLÁVIA ALMADA DO ; CABRAL, Lucio Mendes . JOURNAL OF APPLIED PHARMACEUTICAL SCIENCE, v. 1, p. 1-10, 2023.',
            link: ''
        },
        {
            description: '<b>Use of In silico Methodologies to Predict the Bioavailability of OralSuspensions: A Regulatory Approach.</b> DA SILVA HONÓRIO, THIAGO ; SIMON, ALICE ; CLACINO MACHADO, RAIANE MONTEIRO ; Rodrigues, Carlos Rangel ; DO CARMO, FLÁVIA ALMADA ; CABRAL, Lucio Mendes ; DE SOUSA, VALERIA PEREIRA . CURRENT PHARMACEUTICAL DESIGN, v. 29, p. 3040-3049, 2023. Citações:1|2',
            link: ''
        },
        {
            description: '<b>Molluscicidal and Cercaricidal Effects of Myrciaria floribunda Essential Oil Nanoemulsion.</b> MACHADO, FRANCISCO PAIVA ; FOLLY, DIOGO ; ESTEVES, RICARDO ; RUPPELT, BETTINA MONIKA ; DA SILVA, VICTORIA MARQUES ; MATOS, ANA PAULA DOS SANTOS ; SANTOS, JOSÉ AUGUSTO ALBUQUERQUE DOS ; RANGEL, LEONARDO DA SILVA ; SANTOS, MARCELO GUERRA ; VON RANKE, NATALIA LIDMAR ; Rodrigues, Carlos Rangel ; RICCI-JUNIOR, EDUARDO ; ROCHA, LEANDRO ; FARIA, ROBSON XAVIER . MOLECULES, v. 28, p. 5944, 2023. Citações:2',
            link: ''
        },
        {
            description: '<b>In silico and pharmacological study of N,S-acetal juglone derivatives as inhibitors of the P2X7 receptor-promoted in vitro and in vivo inflammatory response.</b> PACHECO, PAULO ANASTÁCIO FURTADO ; FARIA, JULIANA VIEIRA ; SILVA, ANA CLÁUDIA ; VON RANKE, NATALIA LIDMAR ; SILVA, ROBSON COUTINHO ; Rodrigues, Carlos Rangel ; DA ROCHA, DAVID RODRIGUES ; FARIA, ROBSON XAVIER . BIOMEDICINE & PHARMACOTHERAPY, v. 162, p. 114608, 2023. Citações:1|1',
            link: ''
        },
        {
            description: '<b>Molluskicidal nanoemulsion of Neomitranthes obscura (DC.) N. Silveira for schistosomiasis control.</b> RANGEL, LEONARDO DA SILVA ; PAIVA MACHADO, FRANCISCO ; AMARAL, RAQUEL ; CLÁUDIA RODRIGUES DA SILVA, ANA ; SANTOS, MARCELO GUERRA ; ALBUQUERQUE DOS SANTOS, JOSÉ AUGUSTO ; LIDMAR VON RANKE, NATALIA ; Rodrigues, Carlos Rangel ; ROCHA, LEANDRO ; FARIA, ROBSON XAVIER . Frontiers in Pharmacology, v. 14, p. 1-10, 2023.',
            link: ''
        },
        {
            description: '<b>Synthesis, Biological Evaluation and Molecular Modeling Studies of Naphthoquinone Sulfonamides and Sulfonate Ester Derivatives as P2X7 Inhibitors.</b> PACHECO, PAULO ANASTÁCIO FURTADO ; GONZAGA, DANIEL TADEU GOMES ; VON RANKE, NATALIA LIDMAR ; Rodrigues, Carlos Rangel ; DA ROCHA, DAVID RODRIGUES ; DA SILVA, FERNANDO DE CARVALHO ; FERREIRA, Vitor Francisco ; FARIA, ROBSON XAVIER . MOLECULES, v. 28, p. 590, 2023.',
            link: ''
        }
    ];

    // Definir publicationsByYear para uso na cópia inicial
    const publicationsByYear: { [year: string]: { title: string; link: string }[] } = {
        '2025': [
            {
                title: 'In vitro assays identified thiohydantoins with anti-trypanosomatid activity and molecular modelling studies indicated possible selective CYP51 inhibition.',
                link: 'https://www.nature.com/articles/s41598-024-84697-2'
            },
            {
                title: 'Thiourea as a Promising Scaffold for Development of Agents Toward TriTryp Diseases.',
                link: 'http://dx.doi.org/10.1002/slct.202404210'
            },
            {
                title: 'XGBMUT: Predicting the Functional Impact of Missense Mutations Using an Extreme Gradient Boost Classifier.',
                link: 'http://dx.doi.org/10.1021/acsomega.4c10179'
            }
        ],
        '2024': [
            {
                title: 'Synthesis, in silico, and in vitro evaluation of 7-chloro-quinolines designed as myeloperoxidase inhibitors.',
                link: 'http://dx.doi.org/10.1016/j.molstruc.2024.138528'
            },
            {
                title: 'Evaluation of Silybin Nanoparticles against Liver Damage in Murine Schistosomiasis mansoni Infection.',
                link: 'http://dx.doi.org/10.3390/pharmaceutics16050618'
            },
            {
                title: 'Novel naphthoquinone-1H-1,2,3-triazole hybrids: Design, synthesis and evaluation as inductors of ROS-mediated apoptosis in the MCF-7 cells.',
                link: 'http://dx.doi.org/10.1016/j.bmc.2024.117671'
            },
            {
                title: 'Py-CoMFA, docking, and molecular dynamics simulations of Leishmania (L.) amazonensis arginase inhibitors.',
                link: 'http://dx.doi.org/10.1038/s41598-024-62520-2'
            },
            {
                title: 'Exploring Urease Inhibition by Coumarin Derivatives through in silico and in vitro Methods.',
                link: 'http://dx.doi.org/10.21577/0103-5053.20230151'
            },
            {
                title: 'Statine-based peptidomimetic compounds as inhibitors for SARS-CoV-2 main protease (SARS-CoV-2 Mpro).',
                link: 'http://dx.doi.org/10.1038/s41598-024-59442-4'
            },
            {
                title: 'N, N\'-disubstituted Ureas as Novel Antiplatelet Agents: Synthesis, Pharmacological Evaluation and In Silico Studies.',
                link: 'http://dx.doi.org/10.2174/0109298673262854231215065541'
            },
            {
                title: 'Synthesis and Structure-Activity Relationship of Thiourea Derivatives Against Leishmania amazonensis.',
                link: 'http://dx.doi.org/10.3390/ph17121573'
            },
            {
                title: 'Effect of a thiohydantoin salt derived from -Arginine on Leishmania amazonensis and infected cells: Insights from biological effects to molecular docking interactions.',
                link: 'http://dx.doi.org/10.1016/j.cbi.2024.111216'
            }
        ],
        '2023': [
            {
                title: '4-oxoquinoline-3-carboxamide acyclonucleoside phosphonates hybrids: Human MCF-7 breast cancer cell death induction by oxidative stress-promoting and in silico ADMET studies.',
                link: 'http://dx.doi.org/10.1016/j.molstruc.2022.134542'
            },
            {
                title: 'Development of SEDDS formulation containing caffeine for dermal delivery.',
                link: 'http://dx.doi.org/10.1111/ics.12841'
            },
            {
                title: 'Aryl hydrocarbon receptor as a therapeutical target of environmentally induced skin conditions.',
                link: 'http://dx.doi.org/10.1124/molpharm.122.000627'
            },
            {
                title: 'Physiologically based pharmacokinetic modelling of semaglutide in children and adolescents with healthy and obese body weights.',
                link: 'http://dx.doi.org/10.1111/bcp.15816'
            },
            {
                title: 'Chitosan-based hydrotalcite nanostructured membranes containing sodium alendronate for guided bone regeneration therapy.',
                link: 'http://dx.doi.org/10.7324/japs.2023.40064'
            },
            {
                title: 'Use of In silico Methodologies to Predict the Bioavailability of OralSuspensions: A Regulatory Approach.',
                link: 'http://dx.doi.org/10.2174/0113816128257028231030113156'
            },
            {
                title: 'Molluscicidal and Cercaricidal Effects of Myrciaria floribunda Essential Oil Nanoemulsion.',
                link: 'http://dx.doi.org/10.3390/molecules28165944'
            },
            {
                title: 'In silico and pharmacological study of N,S-acetal juglone derivatives as inhibitors of the P2X7 receptor-promoted in vitro and in vivo inflammatory response.',
                link: 'http://dx.doi.org/10.1016/j.biopha.2023.114608'
            },
            {
                title: 'Molluskicidal nanoemulsion of Neomitranthes obscura (DC.) N. Silveira for schistosomiasis control.',
                link: 'http://dx.doi.org/10.3389/fphar.2023.1078936'
            },
            {
                title: 'Synthesis, Biological Evaluation and Molecular Modeling Studies of Naphthoquinone Sulfonamides and Sulfonate Ester Derivatives as P2X7 Inhibitors.',
                link: 'http://dx.doi.org/10.3390/molecules28020590'
            }
        ]
    };

    // Voltar para agrupamento por ano, mantendo o título em negrito antes dos autores
    // Atualizar o array publicationsByYear para conter apenas o título e o link (sem autores ou outros dados)
    // Unir publicações de Ana, Alessandra e Bárbara
    const mergedPublicationsByYear: { [year: string]: { title: string; link: string }[] } = JSON.parse(JSON.stringify(publicationsByYear));

    // Publicações de Alessandra
    const alessandraPublications = {
        '2025': [
            { title: 'Thiourea as a Promising Scaffold for Development of Agents Toward TriTryp Diseases.', link: 'http://dx.doi.org/10.1002/slct.202404210' },
            { title: 'CCL21-CCR7 blockade prevents neuroinflammation and degeneration in Parkinson’s disease models.', link: 'http://dx.doi.org/10.1186/s12974-024-03318-x' },
            { title: 'Thiourea-Based Compounds Effectiveness Against the Growth of Mycobacterium kansasii: Synthesis, Biological Activity, and Computational Analysis.', link: 'http://dx.doi.org/10.1002/slct.202500596' },
            { title: 'In Vitro and In Silico Assessments of Curcuminoids and Turmerones from Curcuma longa as Novel Inhibitors of Leishmania infantum Arginase.', link: 'http://dx.doi.org/10.3390/ph18060851' }
        ],
        '2024': [
            { title: 'Novel Naphthoquinone-1H-1,2,3-triazole Hybrids: Design, Synthesis and Evaluation as Inductors of ROS-Mediated Apoptosis in the MCF-7 Cells.', link: 'http://dx.doi.org/10.1016/j.bmc.2024.117671' },
            { title: 'Synthesis, in silico, and in vitro Evaluation of 7-chloro-quinolines Designed as Myeloperoxidase Inhibitors.', link: 'http://dx.doi.org/10.1016/j.molstruc.2024.138528' },
            { title: 'Quinoline derivatives as corrosion inhibitors for mild steel in acid medium: Deeper insights from experimental, ab initio density functional theory modeling, and in silico ecotoxicity investigations.', link: 'http://dx.doi.org/10.1016/j.colsurfa.2024.134255' },
            { title: 'Let’s shed light on photogenotoxicity.', link: 'http://dx.doi.org/10.1016/j.scitotenv.2024.176354' }
        ],
        '2023': [
            { title: '4-oxoquinoline-3-carboxamide acyclonucleoside phosphonates hybrids: Human MCF-7 breast cancer cell death induction by oxidative stress-promoting and in silico ADMET studies.', link: 'http://dx.doi.org/10.1016/j.molstruc.2022.134542' },
            { title: 'Structure-based design of new N-benzyl-piperidine derivatives as multitarget-directed AChE/BuChE inhibitors for Alzheimer’s Disease.', link: 'http://dx.doi.org/10.1002/jcb.30483' },
            { title: 'Investigation of the Anti-asthmatic Activity of Solidagenone, In Vitro Toxicity Versus In Silico Studies.', link: 'http://dx.doi.org/10.1007/s43450-023-00479-3' },
            { title: 'Physiologically based pharmacokinetic modelling of semaglutide in children and adolescents with healthy and obese body weights.', link: 'http://dx.doi.org/10.1111/bcp.15816' },
            { title: 'Use of in silico and in vitro methods as a potential new approach methodologies (NAMs) for (photo)mutagenicity and phototoxicity risk assessment of agrochemicals.', link: 'http://dx.doi.org/10.1016/j.scitotenv.2023.167320' }
        ]
    };
    // Publicações de Ana
    const anaPublications = {
        '2024': [
            { title: 'Understanding the mechanisms of green tea EGCG against amyloid β oligomer neurotoxicity through computational studies.', link: 'http://dx.doi.org/10.1039/d4ra03343d' },
            { title: 'Natural products targeting amyloid-β oligomer neurotoxicity in Alzheimer\'s disease.', link: 'http://dx.doi.org/10.1016/j.ejmech.2024.116684' }
        ],
        '2023': [
            { title: 'How oxidized EGCG remodels α-synuclein fibrils into non-toxic aggregates: insights from computational simulations.', link: 'http://dx.doi.org/10.1039/d3cp02261g' }
        ]
    };
    // Publicações de Bárbara
    const barbaraPublications = {
        '2025': [
            { title: 'Thiourea as a Promising Scaffold for Development of Agents Toward TriTryp Diseases.', link: 'http://dx.doi.org/10.1002/slct.202404210' },
            { title: 'XGBMUT: Predicting the Functional Impact of Missense Mutations Using an Extreme Gradient Boost Classifier.', link: 'http://dx.doi.org/10.1021/acsomega.4c10179' },
            { title: 'In Vitro and In Silico Assessments of Curcuminoids and Turmerones from Curcuma longa as Novel Inhibitors of Leishmania infantum Arginase.', link: 'http://dx.doi.org/10.3390/ph18060851' }
        ],
        '2024': [
            { title: 'Investigation of the Anti-asthmatic Activity of Solidagenone, In Vitro Toxicity Versus In Silico Studies.', link: 'http://dx.doi.org/10.1007/s43450-023-00479-3' },
            { title: 'Synthesis, in silico, and in vitro evaluation of 7-chloro-quinolines designed as myeloperoxidase inhibitors.', link: 'http://dx.doi.org/10.1016/j.molstruc.2024.138528' },
            { title: 'Prenatal Exposure to Herbicide 2,4-Dichlorophenoxyacetic Acid (2,4 D ) Exacerbates Zika Virus Neurotoxicity In Vitro and In Vivo.', link: 'http://dx.doi.org/10.1002/tox.24424' }
        ],
        '2023': [
            { title: '4-oxoquinoline-3-carboxamide acyclonucleoside phosphonates hybrids: Human MCF-7 breast cancer cell death induction by oxidative stress-promoting and in silico ADMET studies.', link: 'http://dx.doi.org/10.1016/j.molstruc.2022.134542' },
            { title: 'Physiologically-based pharmacokinetics modeling of Semaglutide in children and adolescents with healthy and obese body weights.', link: 'http://dx.doi.org/10.1111/bcp.15816' }
        ]
    };

    // Função para adicionar publicações ao objeto agrupado por ano
    function mergePublications(target: { [year: string]: { title: string; link: string }[] }, source: { [year: string]: { title: string; link: string }[] }) {
        for (const year in source) {
            if (!target[year]) target[year] = [];
            // Evitar duplicatas pelo título
            const existingTitles = new Set(target[year].map((pub: { title: string; link: string }) => pub.title));
            source[year].forEach((pub: { title: string; link: string }) => {
                if (!existingTitles.has(pub.title)) {
                    target[year].push(pub);
                }
            });
        }
    }
    mergePublications(mergedPublicationsByYear, alessandraPublications);
    mergePublications(mergedPublicationsByYear, anaPublications);
    mergePublications(mergedPublicationsByYear, barbaraPublications);

    const sortedYears = Object.keys(mergedPublicationsByYear).sort((a, b) => Number(b) - Number(a));

    // Adicionar área de autores
    // const authors = [
    //     { name: 'Carlos Rangel', key: 'carlos', publications: mergedPublicationsByYear }
    // ];

    return (
        <>
            <Header />
            <Container>
                <Title>
                    Publicações
                </Title>
                <Description>
                    Bem-vindo à página de publicações. Aqui você encontrará as publicações científicas do nosso laboratório.
                </Description>
                {sortedYears.map((year) => (
                    <YearSection key={year}>
                        <YearTitle>
                            {year}
                            <YearLine />
                        </YearTitle>
                        <PublicationsGrid>
                            {mergedPublicationsByYear[year].map((pub, index) => (
                                <PublicationCard
                                    key={index}
                                    title={pub.title}
                                    link={pub.link}
                                />
                            ))}
                        </PublicationsGrid>
                    </YearSection>
                ))}
                {/* Fonte removida */}
            </Container>
            <Footer />
        </>
    );
};

export default Publication;