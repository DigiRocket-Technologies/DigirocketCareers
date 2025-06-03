
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
  "id": "1",
  "title": "Foundations of Automation & AI Agents",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Understand the fundamentals of automation and AI agents",
    "Distinguish between different types of automation approaches",
    "Grasp the concept of agentic automation and its applications",
    "Compare code vs no-code automation strategies"
  ],
  "topics_covered": [
    {
      "title": "What is Automation?",
      "content": [
        "Definition and core principles of automation",
        "History and evolution of automation systems",
        "Types of automation: rule-based, workflow, and intelligent",
        "Automation in different industries and use cases",
        "ROI and business impact of automation"
      ]
    },
    {
      "title": "Understanding AI Agents",
      "content": [
        "What are AI agents and how they differ from traditional software",
        "Characteristics of intelligent agents: autonomy, reactivity, proactivity",
        "Types of AI agents: reactive, deliberative, hybrid, and learning agents",
        "Agent architectures and decision-making processes",
        "Real-world examples of AI agents in action"
      ]
    },
    {
      "title": "Agentic Automation Explained",
      "content": [
        "Definition and key concepts of agentic automation",
        "How AI agents enable intelligent automation",
        "Difference between traditional automation and agentic automation",
        "Benefits: adaptability, learning, and autonomous decision-making",
        "Use cases across different domains"
      ]
    },
    {
      "title": "Code vs No-Code Automation",
      "content": [
        "Programming languages for automation (Python, JavaScript, etc.)",
        "Custom development and flexibility",
        "Pros of code-based: Complete control, scalability, complex logic, integration capabilities",
        "Cons of code-based: Requires programming skills, longer development time, maintenance overhead",
        "Visual workflow builders and drag-and-drop interfaces",
        "Pre-built connectors and templates",
        "Pros of no-code: Faster development, no programming required, visual workflow design, easier maintenance",
        "Cons of no-code: Limited customization, vendor lock-in, potential scalability issues",
        "Combining code and no-code solutions",
        "When to use each approach",
        "Migration strategies between approaches"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Analyze and categorize different automation examples",
        "Design an automation strategy for a sample business process",
        "Compare code vs no-code solutions for the same use case",
        "Create a simple rule-based automation workflow"
      ]
    }
  ]
},
{
  "id": "2",
  "title": "AI Technologies for Automation",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Understand core AI technologies powering modern automation",
    "Learn about LangChain framework for building AI applications",
    "Master RAG (Retrieval-Augmented Generation) concepts",
    "Understand vector databases and their role in AI systems"
  ],
  "topics_covered": [
    {
      "title": "What is LangChain?",
      "content": [
        "Introduction to LangChain framework",
        "Core components: chains, agents, memory, and tools",
        "LangChain vs traditional AI development approaches",
        "Building blocks for AI applications",
        "Integration with various LLMs and services",
        "Use cases and practical applications"
      ]
    },
    {
      "title": "Understanding RAG (Retrieval-Augmented Generation)",
      "content": [
        "What is RAG and why it's crucial for AI automation",
        "RAG architecture and workflow",
        "Difference between RAG and fine-tuning",
        "Types of RAG: naive, advanced, and conversational",
        "RAG for automation: dynamic knowledge retrieval",
        "Performance considerations and optimization"
      ]
    },
    {
      "title": "Vector Databases Explained",
      "content": [
        "What are vector databases and why they matter",
        "How vector embeddings work",
        "Popular vector database solutions: Pinecone, Weaviate, Chroma",
        "Integration with AI automation workflows",
        "Storage, retrieval, and similarity search",
        "Choosing the right vector database for your use case"
      ]
    },
    {
      "title": "Putting It All Together",
      "content": [
        "How LangChain, RAG, and vector databases work together",
        "Building intelligent automation systems",
        "Data flow and processing pipelines",
        "Real-world integration examples"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Set up a basic LangChain application",
        "Build a simple RAG system with document retrieval",
        "Implement vector database storage and search",
        "Create an intelligent Q&A automation system",
  ],} ] },
  {
  "id": "3",
  "title": "Machine Learning & Deep Learning Crash Course",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Understand fundamental ML/DL concepts for automation",
    "Learn key algorithms and their applications in automation",
    "Grasp neural networks and their role in intelligent systems",
    "Apply ML/DL concepts to automation scenarios"
  ],
  "topics_covered": [
    {
      "title": "Machine Learning Foundations",
      "content": [
        "What is Machine Learning and its types",
        "Supervised, unsupervised, and reinforcement learning",
        "Key algorithms: regression, classification, clustering",
        "Training, validation, and testing concepts",
        "Model evaluation and performance metrics",
        "ML pipeline and workflow"
      ]
    },
    {
      "title": "Deep Learning Essentials",
      "content": [
        "Introduction to neural networks",
        "Deep learning vs traditional ML",
        "Key architectures: feedforward, convolutional, recurrent networks",
        "Transformers and attention mechanisms",
        "Pre-trained models and transfer learning",
        "Deep learning frameworks overview"
      ]
    },
    {
      "title": "ML/DL for Automation",
      "content": [
        "Predictive analytics in automation",
        "Anomaly detection and monitoring",
        "Classification for decision-making",
        "Natural Language Processing for text automation",
        "Computer vision for image/video processing",
        "Time series forecasting for scheduling"
      ]
    },
    {
      "title": "Practical Implementation",
      "content": [
        "No-code ML tools and platforms",
        "AutoML solutions for automation",
        "Integrating ML models into automation workflows",
        "Model deployment and monitoring",
        "Ethical considerations and bias mitigation"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a predictive model for automation scheduling",
        "Implement text classification for email automation",
        "Create an anomaly detection system",
        "Integrate ML predictions into decision workflows"
      ]
    }
  ]
},
{
  "id": "4",
  "title": "N8N Deep Dive - Complete Automation Platform",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Master N8N platform for comprehensive automation",
    "Build complex, multi-step automation workflows",
    "Integrate AI services and APIs seamlessly",
    "Deploy and manage production automation systems"
  ],
  "topics_covered": [
    {
      "title": "N8N Fundamentals",
      "content": [
        "N8N architecture and core concepts",
        "Installation and setup (cloud vs self-hosted)",
        "Node types and workflow building",
        "Data flow and transformation",
        "Triggers, webhooks, and scheduling",
        "Error handling and debugging"
      ]
    },
    {
      "title": "Advanced N8N Features",
      "content": [
        "Custom functions and JavaScript code",
        "Conditional logic and branching",
        "Loops and batch processing",
        "Data manipulation and transformation",
        "Environment variables and credentials management",
        "Workflow version control"
      ]
    },
    {
      "title": "AI Integration in N8N",
      "content": [
        "Connecting to AI services (OpenAI, Claude, etc.)",
        "LangChain integration within N8N",
        "RAG implementation in workflows",
        "Vector database connections",
        "Prompt engineering and management",
        "Response processing and formatting"
      ]
    },
    {
      "title": "Database and API Integrations",
      "content": [
        "SQL and NoSQL database connections",
        "REST API integration patterns",
        "GraphQL queries and mutations",
        "File processing and storage",
        "Cloud service integrations (AWS, Google Cloud, Azure)",
        "Third-party service connections"
      ]
    },
    {
      "title": "Monitoring and Optimization",
      "content": [
        "Workflow performance monitoring",
        "Error tracking and notifications",
        "Resource usage optimization",
        "Scaling strategies",
        "Backup and recovery",
        "Security best practices"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a complete data processing pipeline",
        "Create an AI-powered content moderation system",
        "Implement multi-service integration workflow",
        "Deploy a production-ready automation system"
      ]
    }
  ]
},
{
  "id": "5",
  "title": "Digital Marketing Automation with N8N",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Understand digital marketing fundamentals and SEO basics",
    "Automate blog creation and content management processes",
    "Implement keyword research and tracking systems",
    "Build comprehensive SEO automation workflows"
  ],
  "topics_covered": [
    {
      "title": "Digital Marketing & SEO Fundamentals",
      "content": [
        "Digital marketing landscape overview",
        "What is SEO (Search Engine Optimization)?",
        "Key SEO concepts: keywords, rankings, backlinks, SERP",
        "Content marketing and its role in SEO",
        "Analytics and performance measurement",
        "Tools and platforms in digital marketing"
      ]
    },
    {
      "title": "Blog Creation Automation",
      "content": [
        "Content ideation and topic research automation",
        "AI-powered content generation workflows",
        "Blog post structuring and formatting",
        "SEO optimization during content creation",
        "Multi-platform publishing automation",
        "Content calendar management"
      ]
    },
    {
      "title": "Keyword Research & Analysis",
      "content": [
        "What are keywords and why they matter",
        "Types of keywords: short-tail, long-tail, LSI",
        "Keyword research tools and APIs",
        "Automated keyword discovery workflows",
        "Competitor keyword analysis",
        "Keyword difficulty and search volume assessment"
      ]
    },
    {
      "title": "Keyword Tracking & Monitoring",
      "content": [
        "Setting up automated rank tracking",
        "SERP monitoring and analysis",
        "Performance alerts and notifications",
        "Competitor tracking automation",
        "Reporting and dashboard creation",
        "Trend analysis and insights generation"
      ]
    },
    {
      "title": "SEO Automation Workflows",
      "content": [
        "Technical SEO monitoring",
        "Content optimization automation",
        "Link building and outreach automation",
        "Local SEO automation",
        "E-commerce SEO workflows",
        "Performance reporting and analytics"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build an automated blog content creation pipeline",
        "Create a comprehensive keyword research system",
        "Implement rank tracking and monitoring automation",
        "Develop an SEO performance dashboard"
      ]
    }
  ]
},
{
  "id": "6",
  "title": "Marketing Automation Mastery",
  "duration": "3-4 weeks",
  "learning_objectives": [
    "Master email marketing automation strategies",
    "Implement WhatsApp business automation",
    "Build AI-powered calling systems",
    "Create integrated multi-channel marketing campaigns"
  ],
  "topics_covered": [
    {
      "title": "Email Marketing Automation",
      "content": [
        "Email marketing fundamentals and best practices",
        "List building and segmentation strategies",
        "Automated email sequences and drip campaigns",
        "Personalization and dynamic content",
        "A/B testing automation",
        "Email deliverability optimization",
        "Integration with CRM systems"
      ]
    },
    {
      "title": "WhatsApp Marketing Automation",
      "content": [
        "WhatsApp Business API overview",
        "Setting up WhatsApp automation workflows",
        "Message templates and approval processes",
        "Broadcast campaigns and targeted messaging",
        "Chatbot integration for customer support",
        "Compliance and best practices",
        "Analytics and performance tracking"
      ]
    },
    {
      "title": "AI-Powered Calling Systems",
      "content": [
        "Voice AI technology overview",
        "Text-to-speech and speech-to-text integration",
        "Call scripting and conversation flows",
        "Lead qualification automation",
        "Appointment scheduling through voice",
        "Call analytics and performance metrics",
        "Integration with CRM and sales systems"
      ]
    },
    {
      "title": "Multi-Channel Marketing Integration",
      "content": [
        "Omni-channel marketing strategies",
        "Cross-platform data synchronization",
        "Customer journey mapping and automation",
        "Attribution modeling and tracking",
        "Unified analytics and reporting",
        "Campaign optimization across channels"
      ]
    },
    {
      "title": "Advanced Marketing Automation",
      "content": [
        "Behavioral trigger automation",
        "Predictive analytics for marketing",
        "Customer lifetime value optimization",
        "Churn prediction and retention campaigns",
        "Dynamic pricing and promotion automation",
        "Social media automation integration"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Build a complete email marketing automation system",
        "Create WhatsApp business automation workflows",
        "Implement AI calling system for lead generation",
        "Develop integrated multi-channel marketing campaign"
      ]
    }
  ]
},{
  "id": "7",
  "title": "Production Deployment & Scaling",
  "duration": "2-3 weeks",
  "learning_objectives": [
    "Deploy automation systems to production environments",
    "Implement monitoring and maintenance strategies",
    "Scale automation workflows for enterprise use",
    "Ensure security and compliance standards"
  ],
  "topics_covered": [
    {
      "title": "Production Deployment",
      "content": [
        "Environment setup and configuration",
        "CI/CD for automation workflows",
        "Security considerations and access control",
        "Performance optimization for production",
        "Backup and disaster recovery",
        "Documentation and knowledge transfer"
      ]
    },
    {
      "title": "Monitoring & Maintenance",
      "content": [
        "System health monitoring",
        "Performance metrics and KPIs",
        "Automated alerting and notifications",
        "Troubleshooting and debugging",
        "Regular maintenance schedules",
        "Update and upgrade strategies"
      ]
    },
    {
      "title": "Scaling Strategies",
      "content": [
        "Horizontal vs vertical scaling",
        "Load balancing and distribution",
        "Resource optimization",
        "Cost management and optimization",
        "Enterprise-level considerations",
        "Integration with existing systems"
      ]
    },
    {
      "title": "Hands-on Projects",
      "content": [
        "Deploy a complete automation system to production",
        "Set up comprehensive monitoring and alerting",
        "Implement scaling strategies for high-volume workflows",
        "Create maintenance and support documentation"
      ]
    }
  ]
}
]; 

const AgenticCurriculum= () => {
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

export default AgenticCurriculum;