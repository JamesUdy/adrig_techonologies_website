import {
  AIAgentDevelopment,
  AIChatbotDevelopmentCompany,
  AIConsulting,
  AICopilotDevelopment,
  AIDevelopment,
  AIasaService,
  AdaptiveAIDevelopmentCompany,
  AppDeveloper,
  BlockchainConsulting,
  BlockchainDeveloper,
  BlockchainDevelopment,
  ChatGPTDevelopers,
  ChatGPTIntegrationService,
  ComputerVisionERP,
  CosmosDevelopment,
  CryptoWalletDevelopmentSolution,
  DataEngineeringServices,
  DevOpsEngineers,
  DigitalTransformation,
  EnterpriseAIChatbotDevelopmentCompany,
  EnterpriseAIDevelopment,
  EnterpriseSoftwareDevelopment,
  EthereumBlockchainServices,
  Eyeq,
  FirmwareDevelopment,
  FullStackDeveloper,
  GameDevelopment,
  GenerativeAIConsultingCompany,
  GenerativeAIDevelopment,
  GenerativeAIIntegrationServices,
  GolangDevelopment,
  HardwareDesign,
  HireAIEngineers,
  HireCosmosDevelopers,
  HireDataScientist,
  HireDedicatedDevelopers,
  HireGenerativeAIEngineers,
  HireGolangDevelopers,
  HireMLDevelopers,
  HirePromptEngineers,
  HireStellarDevelopers,
  HireTransformerDevelopers,
  HyperledgerDevelopment,
  IndustrialIoTSolutions,
  IoTDevelopment,
  IoTHealthcareSoftware,
  IoTProductDevelopment,
  LargeLanguageModelDevelopment,
  MLOpsConsultingServices,
  MetaverseApplication,
  MetaverseAvatarDevelopment,
  MetaverseDevelopment,
  MetaverseGamingSpace,
  NFTMarketplaceDevelopment,
  NFTMarketplaceSolution,
  OffshoreEngineers,
  Predicis,
  RustDevelopment,
  SaaSDevelopment,
  SmartContractAudit,
  SoftwareConsulting,
  SoftwareDevelopment,
  SolanaDevelopment,
  StableDiffusionDevelopers,
  StateofWeb3,
  StellarDevelopment,
  SubstrateDevelopment,
  TezosDevelopment,
  TransformerModelDevelopment,
  UIUXDesignService,
  VR,
  Web3Development,
  WebApplicationDevelopment,
} from "@/assets"
import { NavbarLinksTypes } from "../types"

export const navbarLinks: NavbarLinksTypes[] = [
  {
    id: 1,
    label: "AI Products",
    url: "",
    assets: [
      {
        id: 1,
        label: "Eyeq",
        image: Eyeq as unknown as string,
        url: "/ai-products/eye-q",
      },
      {
        id: 2,
        label: "Predicis",
        image: Predicis as unknown as string,
        url: "/ai-products/predicis",
      },
      {
        id: 3,
        label: "Computer Vision ERP",
        image: ComputerVisionERP as unknown as string,
        url: "/ai-products/cverp",
      },
    ],
  },
  {
    id: 2,
    label: "Services",
    url: "",
    assets: [
      // Generative AI
      {
        id: 1,
        label: "Generative AI",
        url: "/services",
        assets: [
          {
            id: 1,
            label: "Generative AI Development",
            image: GenerativeAIDevelopment,
            url: "/services/generative-ai-development-company",
          },
          {
            id: 2,
            label: "Generative AI Integration Services",
            image: GenerativeAIIntegrationServices,
            url: "/services/generative-ai-integration-service",
          },
          {
            id: 3,
            label: "Generative AI Consulting Company",
            image: GenerativeAIConsultingCompany,
            url: "/services/generative-ai-consulting-company",
          },
          {
            id: 4,
            label: "Hire Generative AI Engineers",
            image: HireGenerativeAIEngineers,
            url: "/services/hire-generative-ai-engineers",
          },
          {
            id: 5,
            label: "AI Agent Development",
            image: AIAgentDevelopment,
            url: "/services/ai-agent-development-company",
          },
          {
            id: 6,
            label: "AI Copilot Development",
            image: AICopilotDevelopment,
            url: "/services/ai-copilot-development-company",
          },
          {
            id: 7,
            label: "Hire Prompt Engineers",
            image: HirePromptEngineers,
            url: "/services/hire-prompt-engineers",
          },
          {
            id: 8,
            label: "Adaptive AI Development Company",
            image: AdaptiveAIDevelopmentCompany,
            url: "/services/adaptive-ai-development-company",
          },
          {
            id: 9,
            label: "ChatGPT Developers",
            image: ChatGPTDevelopers,
            url: "/services/chatgpt-developers",
          },
          {
            id: 10,
            label: "Stable Diffusion Developers",
            image: StableDiffusionDevelopers,
            url: "/services/stable-diffusion-developers",
          },
          {
            id: 11,
            label: "ChatGPT Integration Service",
            image: ChatGPTIntegrationService,
            url: "/services/chatgpt-integration-service",
          },
          {
            id: 12,
            label: "Large Language Model Development",
            image: LargeLanguageModelDevelopment,
            url: "/services/large-language-model-development-company",
          },
        ],
      },

      // AI & ML
      {
        id: 2,
        label: "Artificial Intelligence & ML",
        url: "/services/ai-development",
        assets: [
          {
            id: 1,
            label: "AI Development",
            image: AIDevelopment,
            url: "/services/ai-development",
          },
          {
            id: 2,
            label: "AI Consulting",
            image: AIConsulting,
            url: "/services/ai-consulting",
          },
          {
            id: 3,
            label: "Hire AI Engineers",
            image: HireAIEngineers,
            url: "/services/ai-hire-ai-engineers",
          },
          {
            id: 4,
            label: "AI as a Service",
            image: AIasaService,
            url: "/services/ai-as-a-services",
          },
          {
            id: 5,
            label: "Hire Action Transformer Developers",
            image: HireTransformerDevelopers,
            url: "/services/ai-hire-action-transformer-developers",
          },
          {
            id: 6,
            label: "MLOps Consulting Services",
            image: MLOpsConsultingServices,
            url: "/services/mlops-consulting-services",
          },
          {
            id: 7,
            label: "Enterprise AI Development",
            image: EnterpriseAIDevelopment,
            url: "/services/ai-enterprise-ai-development-company",
          },
          {
            id: 8,
            label: "AI Chatbot Development Company",
            image: AIChatbotDevelopmentCompany,
            url: "services/ai-chatbot-development-company",
          },
          {
            id: 9,
            label: "Enterprise AI Chatbot Development Company",
            image: EnterpriseAIChatbotDevelopmentCompany,
            url: "/services/ai-enterprise-ai-chatbot-development-company",
          },
          {
            id: 10,
            label: "Transformer Model Development",
            image: TransformerModelDevelopment,
            url: "/services/ai-transformer-model-development-service",
          },
        ],
      },

      // Software Development
      {
        id: 6,
        label: "Software Development",
        url: "/service",
        assets: [
          {
            id: 1,
            label: "Software Development",
            image: SoftwareDevelopment,
            url: "/services/software-development-company",
          },
          {
            id: 2,
            label: "SaaS Development",
            image: SaaSDevelopment,
            url: "/services/saas-development-company",
          },
          {
            id: 3,
            label: "Software Consulting",
            image: SoftwareConsulting,
            url: "/services/software-consulting-company",
          },
          {
            id: 4,
            label: "UI/UX Design Service",
            image: UIUXDesignService,
            url: "/services/ui-ux-design-services",
          },
          {
            id: 5,
            label: "Enterprise Software Development",
            image: EnterpriseSoftwareDevelopment,
            url: "/services/enterprise-software-development-company",
          },
          {
            id: 6,
            label: "Web Application Development",
            image: WebApplicationDevelopment,
            url: "/services/web-application-development",
          },
          {
            id: 7,
            label: "Digital Transformation",
            image: DigitalTransformation,
            url: "/services/digital-transformation-services",
          },
        ],
      },

      // Game Development
      {
        id: 3,
        label: "Game Development",
        url: "/services/game-development",
        assets: [
          {
            id: 1,
            label: "Game Development",
            image: GameDevelopment,
            url: "/services/game-development",
          },
          {
            id: 2,
            label: "VR",
            image: VR,
            url: "/services/game-development-vr",
          },
        ],
      },

      // Talent Acquisition
      {
        id: 7,
        label: "Talent Acquisition",
        url: "/service",
        assets: [
          {
            id: 1,
            label: "Hire ML Developers",
            image: HireMLDevelopers,
            url: "/services/hire-machine-learning-developers",
          },
          {
            id: 2,
            label: "DevOps Engineers",
            image: DevOpsEngineers,
            url: "/services/hire-devops-engineer",
          },
          {
            id: 3,
            label: "Offshore Engineers",
            image: OffshoreEngineers,
            url: "/services/hire-offshore-engineer",
          },
          {
            id: 4,
            label: "App Developer",
            image: AppDeveloper,
            url: "/services/app-development-company-united-states",
          },
          {
            id: 5,
            label: "Hire Golang Developers",
            image: HireGolangDevelopers,
            url: "/services/hire-golang-developers",
          },
          {
            id: 6,
            label: "Blockchain Developer",
            image: BlockchainDeveloper,
            url: "/services/blockchain-developers",
          },
          {
            id: 7,
            label: "Hire Dedicated Developers",
            image: HireDedicatedDevelopers,
            url: "/services/hire-dedicated-developers",
          },
          {
            id: 8,
            label: "Hire Cosmos Developers",
            image: HireCosmosDevelopers,
            url: "/services/hire-cosmos-developers",
          },
          {
            id: 9,
            label: "Hire Stellar Developers",
            image: HireStellarDevelopers,
            url: "/services/hire-stellar-developers",
          },
          {
            id: 10,
            label: "Full Stack Developer",
            image: FullStackDeveloper,
            url: "/services/hire-full-stack-developer",
          },
        ],
      },

      // IOT
      {
        id: 8,
        label: "Internet of Things(IOT)",
        url: "/service",
        assets: [
          {
            id: 1,
            label: "IoT Development",
            image: IoTDevelopment,
            url: "/services/iot-development-company",
          },
          {
            id: 2,
            label: "Industrial IoT Solutions",
            image: IndustrialIoTSolutions,
            url: "/services/industrial-iot-solutions",
          },
          {
            id: 3,
            label: "Firmware Development",
            image: FirmwareDevelopment,
            url: "/services/firmware-development-company",
          },
          {
            id: 4,
            label: "IoT Healthcare Software",
            image: IoTHealthcareSoftware,
            url: "/services/iot-healthcare-software-development",
          },
          {
            id: 5,
            label: "IoT Product Development",
            image: IoTProductDevelopment,
            url: "/services/iot-product-development",
          },
          {
            id: 1,
            label: "Hardware Design",
            image: HardwareDesign,
            url: "/services/iot-hardware-design-services",
          },
        ],
      },

      // Web3
      {
        id: 4,
        label: "Web3",
        url: "/services/web3-development-company",
        assets: [
          {
            id: 1,
            label: "Web3 Development",
            image: Web3Development,
            url: "/services/web3-development-company",
          },
          {
            id: 2,
            label: "State of Web3",
            image: StateofWeb3,
            url: "/services/current-state-of-web3",
          },
          {
            id: 3,
            label: "Rust Development",
            image: RustDevelopment,
            url: "/services/rust-development-company",
          },
          {
            id: 4,
            label: "Web3 Game Development",
            image: Web3Development,
            url: "/services/web3-game-development-company",
          },
          {
            id: 5,
            label: "Metaverse Development",
            image: MetaverseDevelopment,
            url: "/services/metaverse-development-company",
          },
          {
            id: 6,
            label: "Metaverse Application",
            image: MetaverseApplication,
            url: "/services/metaverse/applications-development",
          },
          {
            id: 7,
            label: "Metaverse Gaming Space",
            image: MetaverseGamingSpace,
            url: "/services/metaverse/gaming-space-development",
          },
          {
            id: 8,
            label: "Metaverse Avatar Development",
            image: MetaverseAvatarDevelopment,
            url: "/services/metaverse/avatar-development",
          },
          {
            id: 9,
            label: "NFT Marketplace Development",
            image: NFTMarketplaceDevelopment,
            url: "/services/nft-marketplace-development-company",
          },
          {
            id: 10,
            label: "NFT Marketplace Solution",
            image: NFTMarketplaceSolution,
            url: "/services/nft-marketplace",
          },
        ],
      },

      // BlockChain
      {
        id: 5,
        label: "Blockchain",
        url: "/services/blockchain-consulting-services",
        assets: [
          {
            id: 1,
            label: "Blockchain Development",
            image: BlockchainDevelopment,
            url: "/services/blockchain-development-company",
          },
          {
            id: 2,
            label: "Blockchain Consulting",
            image: BlockchainConsulting,
            url: "/services/blockchain-consulting-services",
          },
          {
            id: 3,
            label: "Substrate Development",
            image: SubstrateDevelopment,
            url: "/services/substrate-development-services",
          },
          {
            id: 4,
            label: "Ethereum Blockchain Services",
            image: EthereumBlockchainServices,
            url: "/services/ethereum",
          },
          {
            id: 5,
            label: "Hyperledger Development",
            image: HyperledgerDevelopment,
            url: "/services/hyperledger-blockchain-development-services",
          },
          {
            id: 6,
            label: "Golang Development",
            image: GolangDevelopment,
            url: "/services/golang-development-company",
          },
          {
            id: 7,
            label: "Cosmos Development",
            image: CosmosDevelopment,
            url: "/services/cosmos-development-company",
          },
          {
            id: 8,
            label: "Solana Development",
            image: SolanaDevelopment,
            url: "/services/solana-blockchain-development-company",
          },
          {
            id: 9,
            label: "Tezos Development",
            image: TezosDevelopment,
            url: "/services/tezos-development",
          },
          {
            id: 10,
            label: "Stellar Development",
            image: StellarDevelopment,
            url: "/services/stellar-blockchain",
          },
          {
            id: 11,
            label: "Smart Contract Audit",
            image: SmartContractAudit,
            url: "/services/smart-contract-audit-company",
          },
          {
            id: 12,
            label: "Crypto Wallet Development Solution",
            image: CryptoWalletDevelopmentSolution,
            url: "/services/crypto-wallet-development-solution",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "About",
    url: "/about",
  },
]
