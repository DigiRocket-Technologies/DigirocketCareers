
import { useState } from 'react';
import { ChevronDown, Clock, BookOpen, Target } from 'lucide-react';

// Type definitions
interface TopicContent {
  title: string;
  content: string[];
}

interface CurriculumModule {
  id: string;
  title: string;
  duration: string;
  learning_objectives: string[];
  topics_covered: TopicContent[];
}

const curriculumData: CurriculumModule[] = [
  {
    id: "1",
    title: "LLM Foundations & Landscape",
    duration: "2-3 weeks",
    learning_objectives: [
      "Understand what Large Language Models are and how they work",
      "Compare different LLM architectures and capabilities", 
      "Navigate the LLM ecosystem effectively"
    ],
    topics_covered: [
      {
        title: "Introduction to Large Language Models",
        content: [
          "What are LLMs and why they matter",
          "Brief history and evolution of language models",
          "Key terminology and concepts (tokens, parameters, inference, etc.)",
          "How LLMs generate text (transformer architecture basics)"
        ]
      },
      {
        title: "LLM Comparison & Selection",
        content: [
          "Popular LLMs and their characteristics (GPT series, Claude, Llama, etc.)",
          "Performance metrics and benchmarks",
          "Use case-specific model selection",
          "Cost considerations and API pricing models"
        ]
      },
      {
        title: "Open Source vs Closed Source LLMs",
        content: [
          "Open Source LLMs: Llama 2/3, Mistral, CodeLlama, Falcon",
          "Advantages: customization, cost control, privacy",
          "Disadvantages: infrastructure requirements, support",
          "Closed Source LLMs: GPT-4, Claude, Gemini, API-based models",
          "Advantages: ease of use, cutting-edge performance",
          "Disadvantages: cost, vendor lock-in, data privacy"
        ]
      },
      {
        title: "LLM Deployment Options",
        content: [
          "Cloud APIs vs local hosting",
          "Hardware requirements for different model sizes",
          "Introduction to inference optimization"
        ]
      },
      {
        title: "Hands-on Projects",
        content: [
          "Compare 3 different LLMs on the same task",
          "Set up and run a small open-source model locally",
          "API integration with multiple LLM providers"
        ]
      }
    ]
  },{
  "id": "2",
  "title": "Python Zero to Hero",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Master Python fundamentals for AI/ML development",
    "Learn advanced data manipulation techniques",
    "Build production-ready LLM applications"
  ],
  "topics_covered": [
    {
      "title": "Python Basics for LLM Development",
      "content": [
        "Data types and structures",
        "Functions and classes",
        "File I/O operations",
        "Error handling and debugging",
        "Virtual environments (venv, conda)",
        "Package management (pip, poetry)",
        "Jupyter notebooks for experimentation"
      ]
    },
    {
      "title": "Core Libraries for LLM Work",
      "content": [
        "Array operations and data manipulation with NumPy",
        "DataFrame operations for large datasets using Pandas",
        "Data analysis and statistics",
        "HTTP requests and API integration with Requests",
        "Authentication and error handling in APIs",
        "Async programming for concurrent requests"
      ]
    },
    {
      "title": "Advanced Data Manipulation",
      "content": [
        "Chunked processing with Pandas",
        "Dask for parallel computing",
        "Memory optimization techniques",
        "Text preprocessing pipelines",
        "JSON/XML parsing and manipulation",
        "Regular expressions for text cleaning",
        "SQLAlchemy for database operations",
        "Vector database connections",
        "Data pipeline orchestration"
      ]
    },
    {
      "title": "LLM-Specific Python Libraries",
      "content": [
        "Using the Hugging Face Transformers library",
        "Working with Datasets and Tokenizers",
        "LangChain and LlamaIndex for LLM application building",
        "Chain composition and integration patterns",
        "API wrappers: OpenAI, Anthropic, Cohere",
        "Custom wrapper development"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a data processing pipeline for LLM training data",
        "Create a multi-API LLM interface",
        "Develop a text analysis tool with advanced Pandas operations",
        "Build a complete LLM application with proper error handling"
      ]
    }
  ]
},
{
  "id": "3",
  "title": "No-Code Automation with n8n",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Master n8n for LLM workflow automation",
    "Build complex AI workflows without coding",
    "Integrate multiple tools and services"
  ],
  "topics_covered": [
    {
      "title": "Introduction to n8n",
      "content": [
        "Workflow concepts and node-based programming",
        "Installation and setup (cloud vs self-hosted)",
        "Interface navigation and basic operations",
        "Nodes, connections, and data flow",
        "Triggers and webhooks",
        "Data transformation and manipulation"
      ]
    },
    {
      "title": "LLM Integration in n8n",
      "content": [
        "OpenAI, Claude, Cohere integrations",
        "Custom API connections",
        "Managing API keys and authentication",
        "Dynamic prompt generation",
        "Context management across nodes",
        "Response processing and formatting"
      ]
    },
    {
      "title": "Building Complex AI Workflows",
      "content": [
        "Content generation pipelines",
        "Data analysis workflows",
        "Document processing automation",
        "IF nodes and branching",
        "Switch nodes for complex routing",
        "Error handling and fallbacks",
        "Database connections",
        "File processing",
        "Web scraping nodes",
        "API data fetching"
      ]
    },
    {
      "title": "Advanced Automation Patterns",
      "content": [
        "Cron-based triggers",
        "Recurring data processing",
        "Automated reporting",
        "Real-time triggers",
        "Integration with external services",
        "Event-driven workflows",
        "Workflow execution monitoring",
        "Error handling and notifications",
        "Performance optimization"
      ]
    },
    {
      "title": "Production Deployment",
      "content": [
        "Version control for workflows",
        "Environment management (dev/staging/prod)",
        "Backup and recovery strategies",
        "Credential management",
        "Data privacy considerations",
        "Access control and permissions"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build an automated content generation pipeline",
        "Create a customer support automation workflow",
        "Develop a data processing and analysis automation",
        "Build a multi-service integration workflow (CRM + LLM + Database)"
      ]
    }
  ]
},
{
  "id": "4",
  "title": "Data Infrastructure & RAG Systems",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Understand database options for LLM applications",
    "Master Retrieval-Augmented Generation (RAG) concepts",
    "Build functional RAG systems"
  ],
  "topics_covered": [
    {
      "title": "Databases for LLM Applications",
      "content": [
        "Pinecone, Weaviate, Chroma, FAISS",
        "When and why to use vector databases",
        "Embedding storage and similarity search",
        "PostgreSQL with pgvector",
        "MongoDB for document storage",
        "Hybrid approaches"
      ]
    },
    {
      "title": "Understanding RAG (Retrieval-Augmented Generation)",
      "content": [
        "What is RAG and why it's essential",
        "RAG vs fine-tuning: when to use each",
        "RAG architecture and components",
        "Types of RAG: naive, advanced, and hybrid approaches"
      ]
    },
    {
      "title": "Building RAG Systems",
      "content": [
        "Document preprocessing and chunking strategies",
        "Embedding models and techniques",
        "Retrieval strategies and ranking",
        "Context injection and prompt engineering",
        "Evaluation metrics for RAG systems"
      ]
    },
    {
      "title": "Advanced RAG Techniques",
      "content": [
        "Multi-modal RAG (text, images, documents)",
        "Conversational RAG with memory",
        "RAG with structured data",
        "Performance optimization and caching"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a document Q&A system using RAG",
        "Create a knowledge base chatbot",
        "Implement advanced RAG with conversation memory",
        "Performance comparison of different vector databases"
      ]
    }
  ]
},
{
  "id": "5",
  "title": "LLM Development Deep Dive",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Understand what it takes to create an LLM from scratch",
    "Learn why fine-tuning is the practical alternative",
    "Master different fine-tuning approaches"
  ],
  "topics_covered": [
    {
      "title": "Creating LLMs from Scratch - Theory & Reality",
      "content": [
        "Massive datasets (trillions of tokens)",
        "Computational requirements (thousands of GPUs)",
        "Infrastructure and engineering challenges",
        "Cost analysis (millions of dollars)",
        "Why it's not feasible for most:",
        "Resource requirements",
        "Time to train (months)",
        "Expertise needed",
        "Risk and uncertainty"
      ]
    },
    {
      "title": "Fine-tuning as the Practical Alternative",
      "content": [
        "Full fine-tuning",
        "Parameter-Efficient Fine-Tuning (PEFT)",
        "LoRA (Low-Rank Adaptation)",
        "QLoRA (Quantized LoRA)",
        "Adapter methods"
      ]
    },
    {
      "title": "Fine-tuning Requirements & Process",
      "content": [
        "GPU memory considerations",
        "Single vs multi-GPU setups",
        "Cloud vs local training",
        "HuggingFace Transformers",
        "PyTorch/TensorFlow",
        "Training frameworks (Trainer, Lightning)"
      ]
    },
    {
      "title": "Fine-tuning Implementation",
      "content": [
        "Supervised Fine-tuning (SFT):",
        "Dataset preparation",
        "Training loop implementation",
        "Hyperparameter tuning",
        "Instruction Tuning:",
        "Creating instruction datasets",
        "Multi-task fine-tuning",
        "Reinforcement Learning from Human Feedback (RLHF):",
        "Concepts and implementation",
        "Reward model training"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Calculate costs for training an LLM from scratch",
        "Fine-tune a small model on a custom dataset",
        "Implement LoRA fine-tuning",
        "Compare different fine-tuning approaches"
      ]
    }
  ]
},
{
  "id": "6",
  "title": "Data Engineering for LLMs",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Master data collection strategies for LLM training",
    "Learn data cleaning and preprocessing techniques",
    "Understand data quality and preparation best practices"
  ],
  "topics_covered": [
    {
      "title": "Understanding Data for LLMs",
      "content": [
        "Text data (web scraping, books, articles)",
        "Structured data (databases, APIs)",
        "Conversational data (chat logs, Q&A pairs)",
        "Code data (repositories, documentation)",
        "Relevance, accuracy, diversity",
        "Bias detection and mitigation",
        "Data licensing and ethics"
      ]
    },
    {
      "title": "Data Collection Strategies",
      "content": [
        "Legal and ethical considerations",
        "Tools: BeautifulSoup, Scrapy, Selenium",
        "Rate limiting and respectful scraping",
        "REST APIs, GraphQL",
        "Authentication and rate limits",
        "Data pagination and bulk downloads",
        "Using LLMs to generate training data",
        "Quality control for synthetic data",
        "Augmentation techniques"
      ]
    },
    {
      "title": "Data Structuring & Organization",
      "content": [
        "JSON, JSONL, Parquet",
        "Hugging Face datasets format",
        "Custom data structures",
        "Input-output pairs",
        "Instruction-response format",
        "Multi-turn conversations",
        "Metadata inclusion"
      ]
    },
    {
      "title": "Data Cleaning & Preprocessing",
      "content": [
        "Encoding issues and normalization",
        "Removing duplicates and near-duplicates",
        "Language detection and filtering",
        "Content filtering (inappropriate, low-quality)",
        "Schema validation",
        "Quality scoring",
        "Outlier detection",
        "Bias analysis",
        "Tokenization considerations",
        "Sequence length optimization",
        "Data splitting strategies"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a web scraper for collecting domain-specific data",
        "Create a data cleaning pipeline",
        "Generate synthetic training data using LLMs",
        "Implement data quality scoring system"
      ]
    }
  ]
}

];

const Course = () => {
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);

  const toggleModule = (moduleId: string): void => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleTopic = (topicKey: string): void => {
    setExpandedTopics((prev) =>
      prev.includes(topicKey)
        ? prev.filter((key) => key !== topicKey)
        : [...prev, topicKey]
    );
  };

  const getTotalContent = (module: CurriculumModule): number => {
    return module.topics_covered.reduce((acc, topic) => acc + topic.content.length, 0);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Course <span className="text-[#C9F21D]">Curriculum</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive module designed to give you a solid foundation in Large Language Models
          </p>
        </div>

        <div className="space-y-6">
          {curriculumData.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 bg-[#C9F21D] text-black rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                    {module.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                      Module {module.id}: {module.title}
                    </h3>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        Duration: {module.duration}
                      </span>
                      <span className="flex items-center">
                        <BookOpen size={14} className="mr-1" />
                        {module.topics_covered.length} topics
                      </span>
                      <span className="flex items-center">
                        📚 {getTotalContent(module)} lessons
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-gray-400 transition-transform duration-300 ${
                    expandedModules.includes(module.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedModules.includes(module.id)
                    ? 'max-h-[4000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    {/* Learning Objectives */}
                    <div className="mb-8">
                      <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <Target size={18} className="mr-2 text-[#C9F21D]" />
                        Learning Objectives
                      </h4>
                      <div className="space-y-3">
                        {module.learning_objectives.map((objective, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <span className="text-[#C9F21D] font-bold text-lg">•</span>
                            <span className="text-gray-700">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topics Covered */}
                    <div>
                      <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <BookOpen size={18} className="mr-2 text-[#C9F21D]" />
                        Topics Covered
                      </h4>
                      <div className="space-y-4">
                        {module.topics_covered.map((topic, topicIndex) => {
                          const topicKey = `${module.id}-${topicIndex}`;
                          return (
                            <div key={topicIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleTopic(topicKey)}
                                className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 bg-gray-25"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="w-8 h-8 bg-[#C9F21D] text-black rounded-full flex items-center justify-center font-bold text-sm">
                                    {topicIndex + 1}
                                  </span>
                                  <h5 className="text-lg font-semibold text-gray-800 text-left">
                                    {topic.title}
                                  </h5>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {topic.content.length} items
                                  </span>
                                  <ChevronDown
                                    size={20}
                                    className={`text-gray-400 transition-transform duration-300 ${
                                      expandedTopics.includes(topicKey) ? 'rotate-180' : ''
                                    }`}
                                  />
                                </div>
                              </button>

                              <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                                  expandedTopics.includes(topicKey)
                                    ? 'max-h-[1000px] opacity-100'
                                    : 'max-h-0 opacity-0'
                                }`}
                              >
                                <div className="px-4 pb-4">
                                  <div className="border-t border-gray-100 pt-3">
                                    <div className="space-y-2">
                                      {topic.content.map((contentItem, contentIndex) => (
                                        <div
                                          key={contentIndex}
                                          className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 transition-colors duration-200"
                                        >
                                          <span className="text-[#C9F21D] font-bold mt-1">▸</span>
                                          <span className="text-gray-700 leading-relaxed">
                                            {contentItem}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;