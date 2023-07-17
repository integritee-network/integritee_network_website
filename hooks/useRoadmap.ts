import { reactive } from 'vue'
import { objectEntries } from '@vueuse/core'
import map from 'lodash/map'

interface Year {
  year: string
  active: boolean
}

interface Roadmap {
  [key: string]: {
    info: {
      name: string
      content: string[]
      type?: 'long'
    }[]
    active: boolean
  }
}

export default function useRoadmap() {
  const years = reactive<Year[]>([
    {
      year: '2024',
      active: true,
    },
    {
      year: '2023',
      active: false,
    },
    {
      year: '2022',
      active: false,
    },
    {
      year: '2021',
      active: false,
    },
  ])

  const roadmap = reactive<Roadmap>({
    '2024': {
      info: [
        {
          name: 'Q1-Q4',
          content: [
            'Release of Sidechain SDK v 1.0.0',
            'Release of Privacy Sidechain for Statemine/Statemint',
            'Release of Hybrid Sidechains',
            'Bridge TEER from Kusama Parachain to Polkadot Parachain',
            'Bridge to other Ecosystems',
          ],
          type: 'long',
        },
      ],
      active: true,
    },
    '2023': {
      info: [
        {
          name: 'Q1',
          content: [
            'Partnership with OLI Systems',
            'Release of Sidechain SDK v.0.11.0',
            'Release of Teeracle, an TEE-based oracle framework',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Partnership with Enclaive',
            'Launch of Securitee ConfidenDal CompuDng Pla_orm',
            'Launch of Integritee Governance Pla_orm on Polkassembly',
            'Release of Teeracle as Add-on on Securitee Platorm',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release of DCAP A`estaDon on Integritee Network',
            'Release of A`esteer service for TEEs via API',
            'IntegraDon of A`esteer service with Securitee',
            'Release of Sidechain SDK v 0.12.0',
            'Go-Live of first projects on Integritee Mainnet',
            'Brand refresh and new Website',
          ],
        },
        {
          name: 'Q4',
          content: [
            'ImplementaDon of final fee burning mechanism',
            'Launch treasury grant program and bounDes',
            'Release of Sidechain SDK v 0.13.0',
            'Release of Sidechain as a Service on Securitee',
            'DEX LisDng',
          ],
        },
      ],
      active: false,
    },
    '2022': {
      info: [
        {
          name: 'Q1',
          content: [
            'Kusama Parachain slot secured',
            'Release of Sidechain Demo',
            'CollaboraDon with OVH Cloud and Intel',
          ],
        },
        {
          name: 'Q2',
          content: [
            'MigraDon from Solo to Kusama Parachain',
            'Release of Sidechains Benchmark',
            'Network DecentralizaDon: Remove Sudo and enable coin voDng with TEER',
            'LisDng on Kraken Exchange',
          ],
        },
        {
          name: 'Q3',
          content: [
            'XCM IntegraDon with Karura and Moonriver',
            'Polkadot Parachain slot secured',
            'Partnership with Crust',
            'Release of Sidechain SDK v.0.9.0',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Partnership and XCM IntegraDon with Bifrost',
            'Release of Sidechain SDK v.0.10.0',
            'PoC for EVM compaDble Sidechains',
          ],
        },
      ],
      active: false,
    },
    '2021': {
      info: [
        {
          name: 'Q3',
          content: [
            'New Brand and Website relaunch',
            'Move from SubstraTEE to Integritee',
            'Release Tokenomics paper',
            'ParDcipaDon in public slot aucDons on Kusama',
            'Start of Community Growth',
            'Series A Round Close',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Mainnet & Token Launch',
            'First deployment and pracDcal use case hosted on the Integritee mainnet: the US dollar exchange rate oracle.',
            'List TEER on major exchange Gate',
            'Start of Integritee Ambassador Program',
            'Partnership with Ajuna, KILT, Fractal',
          ],
        },
      ],
      active: false,
    },
  })

  function setActive(year: string) {
    map(roadmap, (item) => {
      item.active = false
    })
    roadmap[year].active = true

    const activeYear = years.find((item) => item.year === year)
    if (activeYear) {
      map(years, (item) => {
        item.active = false
      })
      activeYear.active = true
    }
  }

  function getYears() {
    return years
  }

  function getInfoList() {
    const sort = objectEntries(roadmap)
      .map((item) => item[1])
      .reverse()
    return sort
  }

  return { getYears, getInfoList, setActive }
}
