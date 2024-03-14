import { objectEntries } from '@vueuse/core'
import map from 'lodash/map'
import { reactive } from 'vue'

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
    {
      year: '2020',
      active: false,
    },
    {
      year: '2019',
      active: false,
    },
    {
      year: '2018',
      active: false,
    },
  ])

  const roadmap = reactive<Roadmap>({
    '2024': {
      info: [
        {
          name: 'Q1',
          content: [
            'Launch of Incognitee Public Testnet',
            'Launch of Public referenda for TEER holder',
            'Issue of first Treasury grant',
            'Listing on Basilisk DEX',
            'Participation in Polkadot Sub0',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Launch of Incognitee User & Bounty Campaign',
            'Go-Live of first projects on Integritee Mainnet',
            'Release Sidechain SDK v 0.13.0',
            'Release of Sidechain as a Service on Securitee',
            'Launch of treasury grant program ',
          ],
        },
        {
          name: 'Q3-Q4',
          content: [
            'Participation in Polkadot Decoded',
            'Launch of Incognitee on Mainnet in Beta',
            'Implementation of final fee burning mechanism',
            'Release Sidechain SDK v 1.0.0',
            'Bridge TEER from Kusama Parachain to Polkadot Parachain',
            'Bridge to other Ecosystems',
            'Launch of Incognitee on Mainnet in Production',
          ],
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
            'Participation in WEF in Davos',
            'Release Sidechain SDK v 0.11.0',
            'Release of generic trusted oracle framework',
            'Release of Securitee Confidential Computing Platform',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Partnership with Enclaive',
            'Participation in Polkadot India Now and Polkadot Decoded',
            'Launch of Integritee Governance Platform on Polkassembly',
            'Release of Sidechain SDK v 0.12.0',
            'Release of Teeracle as Add-on on Securitee Platorm',
          ],
        },
        {
          name: 'Q3',
          content: [
            'Release of DCAP Attestation on Integritee Network',
            'Release of Attesteer service for TEEs via API',
            'Integration of Attesteer service with Securitee',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Brand Refresh and new Website launched',
            'Acceptance to Tech4Trust Accelerator Season 5',
            'Release of Privacy Sidechain Demo',
            'Release of Incognitee Public Testnet',
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
            'Collaboration with OVH Cloud and Intel',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Migration from Solo to Kusama Parachain',
            'Release of Sidechains Benchmark',
            'Network Decentralization: Remove Sudo and enable coin voting with TEER',
            'Listing on Kraken Exchange',
          ],
        },
        {
          name: 'Q3',
          content: [
            'XCM Integration with Karura and Moonriver',
            'Polkadot Parachain slot secured',
            'Partnership with Crust',
            'Release of Sidechain SDK v.0.9.0',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Partnership and XCM Integration with Bifrost',
            'Release of Sidechain SDK v.0.10.0',
            'PoC for EVM compatible Sidechains',
          ],
        },
      ],
      active: false,
    },
    '2021': {
      info: [
        {
          name: 'Q1',
          content: [
            'Launch Rococo Testnet Parachain',
            'Conceptualize and Preparation of Spin-off',
          ],
        },
        {
          name: 'Q2',
          content: [
            'Spin-off from SCS and birth of Integritee AG',
            'Seed Round Close',
          ],
        },
        {
          name: 'Q3',
          content: [
            'New Brand and Website relaunch',
            'Move from SubstraTEE to Integritee',
            'Release Tokenomics paper',
            'Participation in public slot auctions on Kusama',
            'Start of Community Growth',
            'Series A Round Close',
          ],
        },
        {
          name: 'Q4',
          content: [
            'Mainnet & Token Launch',
            'First deployment and practical use case hosted on the Integritee mainnet: the US dollar exchange rate oracle',
            'List TEER on major exchange Gate',
            'Start of Integritee Ambassador Program',
            'Partnership with Ajuna, KILT, Fractal',
          ],
        },
      ],
      active: false,
    },
    '2020': {
      info: [
        {
          name: 'Q1',
          content: ['3rd Web3 Grant for: SubstraTEE extension pack'],
        },
        {
          name: 'Q2-Q3',
          content: [
            'Development Prototype Platform based on SubstraTEE.',
            'First deployed and running use case with Encointer on the Platform',
          ],
        },
        {
          name: 'Q4',
          content: ['Polkadot Treasury Grant “SubstraTEE scalability”'],
        },
      ],
      active: false,
    },
    '2019': {
      info: [
        {
          name: 'Q1',
          content: [
            '1st Web3 Grant for: Substrate Transaction Privacy using Intel SGX',
          ],
        },
        {
          name: 'Q3',
          content: ['2nd Web3 Grant for: Substrate Rust API client'],
        },
        {
          name: 'Q4',
          content: [
            'First SubstraTEE Meetup to demonstrate private token transactions.',
          ],
        },
      ],
      active: false,
    },
    '2018': {
      info: [
        {
          name: 'Q4',
          content: [
            `Release of the Encointer Whitepaper – “Local Community Cryptocurrencies with Universal Basic Income” and start of the SubstraTEE journey`,
          ],
          type: 'long',
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
