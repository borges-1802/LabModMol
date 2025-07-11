import React from 'react';
import { Container, Title, Description, YearSection, YearTitle, YearLine, PublicationsGrid} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PublicationCard from '../../components/PublicationCard';

interface Publication {
    title: string;
    description: string;
    link: string;
}

const Publication: React.FC = () => {

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