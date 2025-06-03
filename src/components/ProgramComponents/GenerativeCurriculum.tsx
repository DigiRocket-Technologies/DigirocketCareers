import { useState } from "react";
import { ChevronDown, Clock, BookOpen, Target } from "lucide-react";

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
  "id": "1",
  "title": "Generative AI Foundations & Core Concepts",
  "duration":"1-2 weeks",
  "learning_objectives": [
    "Understand the fundamentals of Generative AI and its capabilities",
    "Master key AI components and terminology",
    "Build practical skills with AI development tools"
  ],
  "topics_covered": [
    {
      "title": "Generative AI Deep Dive",
      "content": [
        "What is Generative AI and how it differs from traditional AI",
        "Types of generative models (text, image, code, multimodal)",
        "Real-world applications and use cases across industries",
        "Understanding the generative process and creativity in AI"
      ]
    },
    {
      "title": "Key AI Components",
      "content": [
        "Neural networks and deep learning architecture",
        "Training data and model parameters",
        "Input/output processing and token generation",
        "Model architecture components and their functions",
        "Hardware requirements and computational considerations"
      ]
    },
    {
      "title": "AI Training Process",
      "content": [
        "Data collection and preprocessing stages",
        "Training, validation, and testing phases",
        "Loss functions and optimization techniques",
        "Overfitting, underfitting, and generalization",
        "Model evaluation and performance metrics"
      ]
    },
    {
      "title": "Build a Simple AI in Google Playground",
      "content": [
        "Introduction to Google AI Playground interface",
        "Creating your first AI model",
        "Testing and iterating on model performance",
        "Understanding model responses and behavior patterns",
        "Comparing different model configurations"
      ]
    },
    {
      "title": "Hands-on Practice: Build an AI",
      "content": [
        "Practice Opportunity Question: Build an AI",
        "Practice Opportunity Solution: Build an AI",
        "Step-by-step implementation guidance",
        "Troubleshooting common issues",
        "Best practices for model creation"
      ]
    },
    {
      "title": "Practical Projects",
      "content": [
        "Create multiple AI models with different parameters",
        "Compare model performance across various tasks",
        "Document model behavior and optimization strategies"
      ]
    },
  ]
},{
  "id": "2",
  "title": "Advanced AI Concepts & Technical Mastery",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Master prompt engineering techniques for optimal AI performance",
    "Understand core AI terminologies and concepts",
    "Develop expertise in AI model architecture and embeddings"
  ],
  "topics_covered": [
    {
      "title": "Prompt Engineering Fundamentals",
      "content": [
        "Art and science of prompt design",
        "Prompt structure and optimization techniques",
        "Context management and instruction clarity",
        "Few-shot learning and example-based prompting",
        "Chain-of-thought prompting strategies",
        "Advanced prompting techniques for complex tasks"
      ]
    },
    {
      "title": "Key AI Terminologies",
      "content": [
        "Essential vocabulary for AI practitioners",
        "Understanding model parameters and hyperparameters",
        "Temperature, top-k, and top-p sampling",
        "Tokens, context windows, and sequence length",
        "Fine-tuning vs prompt engineering approaches",
        "Model capabilities and limitations"
      ]
    },
    {
      "title": "Key AI Terminologies: Transformers",
      "content": [
        "Transformer architecture deep dive",
        "Attention mechanisms and self-attention",
        "Encoder-decoder structures",
        "Position encoding and sequence processing",
        "Multi-head attention and parallel processing",
        "Popular transformer models and their applications"
      ]
    },
    {
      "title": "AI Model Visualization",
      "content": [
        "Understanding model architecture diagrams",
        "Visualizing attention patterns and weights",
        "Model performance analysis through graphics",
        "Interpretation techniques for model decisions",
        "Tools for model visualization and analysis"
      ]
    },
    {
      "title": "Key AI Terminologies: Embeddings",
      "content": [
        "Vector representations and semantic meaning",
        "Word embeddings vs sentence embeddings",
        "Similarity calculations and distance metrics",
        "Applications in search and recommendation systems",
        "Creating and using custom embeddings",
        "Embedding visualization and analysis techniques"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Design and test advanced prompt strategies",
        "Create embedding-based similarity systems",
        "Visualize model attention patterns",
        "Build a prompt optimization framework"
      ]
    }
  ]
},{
  "id": "3",
  "title": "API Integration & Practical Implementation",
  "duration":"1-2 weeks",
  "learning_objectives": [
    "Master OpenAI API integration and usage",
    "Build real-world data extraction systems",
    "Develop practical GenAI applications for business use"
  ],
  "topics_covered": [
    {
      "title": "OpenAI API",
      "content": [
        "API authentication and setup",
        "Understanding API endpoints and parameters",
        "Rate limits, pricing, and usage optimization",
        "Error handling and response management",
        "Batch processing and asynchronous requests",
        "Security best practices for API usage"
      ]
    },
    {
      "title": "Practical Project: Data Extraction using GenAI - Part 1",
      "content": [
        "Problem definition and solution design",
        "Setting up the development environment",
        "API integration and initial implementation",
        "Data structure design and planning",
        "Error handling and edge case management"
      ]
    },
    {
      "title": "Practical Project: Data Extraction using GenAI - Part 2",
      "content": [
        "Advanced implementation techniques",
        "Data validation and quality assurance",
        "Performance optimization strategies",
        "Testing and debugging methodologies",
        "Deployment considerations and scalability"
      ]
    },
    {
      "title": "Practice Opportunity: Financial Data Extraction",
      "content": [
        "Practice Opportunity Question: Financial Data Extraction",
        "Practice Opportunity Solution: Financial Data Extraction",
        "Real-world financial data challenges",
        "Structured data extraction techniques",
        "Accuracy validation and error correction"
      ]
    },
    {
      "title": "Practical Projects",
      "content": [
        "Build a complete data extraction system",
        "Create automated financial data processing tools",
        "Develop API integration best practices documentation",
        "Implement error handling and monitoring systems"
      ]
    }
  ]
},{
  "id": "4",
  "duration":"3-4 weeks",
  "title": "ChatGPT for Business & Data Analysis",
  "learning_objectives": [
    "Leverage ChatGPT for business process automation",
    "Master data wrangling and analysis techniques",
    "Create compelling data visualizations for business insights"
  ],
  "topics_covered": [
    {
      "title": "ChatGPT for Business",
      "content": [
        "Business use cases and implementation strategies",
        "Workflow automation and process optimization",
        "Customer service and support applications",
        "Content creation and marketing automation",
        "Internal communication and knowledge management",
        "Integration with existing business systems"
      ]
    },
    {
      "title": "Data Wrangling and Analysis for Business Insights",
      "content": [
        "Data cleaning and preprocessing techniques",
        "Exploratory data analysis with AI assistance",
        "Pattern recognition and trend identification",
        "Statistical analysis and hypothesis testing",
        "Data quality assessment and improvement",
        "Automated data profiling and reporting"
      ]
    },
    {
      "title": "Data Visualization",
      "content": [
        "Choosing appropriate visualization types",
        "Creating compelling charts and graphs",
        "Interactive dashboard development",
        "Storytelling with data and visual narratives",
        "Business intelligence visualization best practices",
        "Automated visualization generation with AI"
      ]
    },
    {
      "title": "Advanced Business Analytics",
      "content": [
        "Customer segmentation and behavioral analysis",
        "Market research and competitive intelligence",
        "Performance metrics and KPI tracking",
        "Predictive modeling for business planning",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      "title": "Practical Projects",
      "content": [
        "Build a comprehensive business analytics dashboard",
        "Create automated data analysis workflows",
        "Develop customer insight generation systems",
        "Design executive reporting automation"
      ]
    }
  ]
},
{
  "id": "5",
  "duration":"1-2 weeks",
  "title": "AI-Powered Financial Analysis & Forecasting",
  "learning_objectives": [
    "Implement AI-driven financial prediction systems",
    "Master competitor analysis using generative AI",
    "Develop business forecasting and planning tools"
  ],
  "topics_covered": [
    {
      "title": "Financial Prediction with Generative AI",
      "content": [
        "Time series analysis and forecasting techniques",
        "Market trend prediction and analysis",
        "Risk assessment and portfolio optimization",
        "Financial modeling with AI assistance",
        "Automated financial report generation",
        "Investment strategy development and testing"
      ]
    },
    {
      "title": "Business Competitor Analysis with Generative AI",
      "content": [
        "Competitive intelligence gathering and analysis",
        "Market positioning and opportunity identification",
        "Product comparison and feature analysis",
        "Pricing strategy analysis and optimization",
        "Brand perception and sentiment analysis",
        "Strategic planning and competitive response"
      ]
    },
    {
      "title": "Business Anomaly Detection",
      "content": [
        "Fraud detection and prevention systems",
        "Operational anomaly identification",
        "Financial irregularity detection",
        "Performance deviation analysis",
        "Automated alert and notification systems",
        "Root cause analysis and investigation"
      ]
    },
    {
      "title": "Business Sales Forecasting",
      "content": [
        "Sales trend analysis and prediction",
        "Seasonal pattern recognition and modeling",
        "Customer behavior prediction and segmentation",
        "Revenue forecasting and planning",
        "Pipeline analysis and conversion optimization",
        "Territory and channel performance analysis"
      ]
    },
    {
      "title": "Practical Projects",
      "content": [
        "Build a comprehensive financial forecasting system",
        "Create competitor monitoring and analysis tools",
        "Develop anomaly detection and alert systems",
        "Design sales forecasting and planning dashboards"
      ]
    }
  ]
},

{
  "id": "6",
  "duration":"1-2 weeks",
  "title": "Advanced Business Intelligence & Reporting",
  "learning_objectives": [
    "Master automated business report generation",
    "Implement variance analysis systems",
    "Create comprehensive business intelligence solutions"
  ],
  "topics_covered": [
    {
      "title": "Business Report Generation with Generative AI",
      "content": [
        "Automated report writing and formatting",
        "Executive summary generation and insights",
        "Multi-format report output (PDF, presentations, dashboards)",
        "Customizable reporting templates and frameworks",
        "Real-time report updates and scheduling",
        "Stakeholder-specific report customization"
      ]
    },
    {
      "title": "Variance Analysis with Generative AI",
      "content": [
        "Budget vs actual performance analysis",
        "Trend deviation identification and explanation",
        "Root cause analysis for performance variations",
        "Forecasting accuracy assessment and improvement",
        "Exception reporting and alert generation",
        "Corrective action recommendation systems"
      ]
    },
    {
      "title": "Advanced Business Intelligence Integration",
      "content": [
        "Enterprise system integration and data consolidation",
        "Cross-functional analytics and reporting",
        "Predictive analytics for strategic planning",
        "Performance benchmarking and comparison",
        "Automated insight generation and distribution",
        "Decision support system development"
      ]
    },
    {
      "title": "Strategic Business Applications",
      "content": [
        "Long-term planning and scenario analysis",
        "Market opportunity assessment and evaluation",
        "Resource allocation optimization",
        "Strategic initiative tracking and measurement",
        "Competitive advantage identification and development",
        "Business transformation and innovation planning"
      ]
    },
    {
      "title": "Practical Projects",
      "content": [
        "Build an enterprise-level automated reporting system",
        "Create comprehensive variance analysis tools",
        "Develop strategic planning and forecasting platforms",
        "Design integrated business intelligence solutions"
      ]
    }
  ]
}




];

const GenerativeCurriculum = () => {
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
    return module.topics_covered.reduce(
      (acc, topic) => acc + topic.content.length,
      0
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Course <span className="text-[#C9F21D]">Curriculum</span>
          </h2>
        </div>

        <div className="space-y-6">
          {curriculumData.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
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
                    expandedModules.includes(module.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedModules.includes(module.id)
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0"
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
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="text-[#C9F21D] font-bold text-lg">
                              •
                            </span>
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
                            <div
                              key={topicIndex}
                              className="border border-gray-200 rounded-lg overflow-hidden"
                            >
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
                                      expandedTopics.includes(topicKey)
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                              </button>

                              <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                                  expandedTopics.includes(topicKey)
                                    ? "max-h-[1000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="px-4 pb-4">
                                  <div className="border-t border-gray-100 pt-3">
                                    <div className="space-y-2">
                                      {topic.content.map(
                                        (contentItem, contentIndex) => (
                                          <div
                                            key={contentIndex}
                                            className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 transition-colors duration-200"
                                          >
                                            <span className="text-[#C9F21D] font-bold mt-1">
                                              ▸
                                            </span>
                                            <span className="text-gray-700 leading-relaxed">
                                              {contentItem}
                                            </span>
                                          </div>
                                        )
                                      )}
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

export default GenerativeCurriculum;
