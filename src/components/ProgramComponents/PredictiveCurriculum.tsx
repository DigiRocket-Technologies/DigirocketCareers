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
    id: "1",
    title: "Python Crash Course for Data Science",
    duration: "2-3 weeks",
    learning_objectives: [
      "Master Python fundamentals for data science and machine learning",
      "Learn essential libraries for data manipulation and analysis",
      "Understand Python programming best practices for ML projects",
      "Set up a complete data science development environment",
    ],
    topics_covered: [
      {
        title: "Python Fundamentals",
        content: [
          "Python syntax and basic programming concepts",
          "Data types: integers, floats, strings, booleans",
          "Data structures: lists, tuples, dictionaries, sets",
          "Control flow: if-else statements, loops (for, while)",
          "Functions: definition, parameters, return values, scope",
          "Error handling and debugging techniques",
        ],
      },
      {
        title: "Essential Libraries for Data Science",
        content: [
          
             "NumPy - Numerical Computing",
             "Pandas - Data Manipulation",
             "Matplotlib & Seaborn - Data Visualization",
        ],
      },
      {
        title: "Development Environment Setup",
        content: [
          "Installing Python and package managers (pip, conda)",
          "Setting up virtual environments",
          "Jupyter Notebook and JupyterLab",
          "IDE setup (VS Code, PyCharm)",
          "Version control with Git for data science projects",
        ],
      },
      {
        title: "Python for Machine Learning",
        content: [
          "Introduction to Scikit-learn library",
          "Basic ML workflow in Python",
          "Data preprocessing utilities",
          "Model training and evaluation patterns",
          "Cross-validation and model selection",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Build a data analysis toolkit with custom functions",
          "Create comprehensive data exploration and visualization dashboard",
          "Develop a data cleaning pipeline for messy datasets",
          "Implement basic statistical analysis using Python",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Machine Learning & Deep Learning Crash Course",
    duration: "3-4 weeks",
    learning_objectives: [
      "Understand fundamental machine learning concepts and algorithms",
      "Learn supervised and unsupervised learning techniques",
      "Grasp deep learning fundamentals and neural networks",
      "Apply ML/DL concepts to real prediction problems",
    ],
    topics_covered: [
      {
        title: "Machine Learning Fundamentals",
        content: [
          "What is Machine Learning and its applications",
          "Types of learning: supervised, unsupervised, reinforcement",
          "Training, validation, and test sets",
          "Overfitting, underfitting, and bias-variance tradeoff",
          "Performance metrics and model evaluation",
          "Cross-validation techniques",
        ],
      },
      {
        title: "Supervised Learning Algorithms",
        content: [
          
              "Linear Regression: assumptions, implementation, interpretation",
              "Polynomial Regression: handling non-linear relationships",
              "Ridge and Lasso Regression: regularization techniques",
              "Decision Trees for regression",
              "Random Forest and ensemble methods",
        
       
              "Logistic Regression: binary and multiclass classification",
              "Decision Trees: splitting criteria and pruning",
              "Random Forest: bagging and feature importance",
              "Support Vector Machines (SVM)",
              "Naive Bayes classifier",
              "k-Nearest Neighbors (k-NN)",
            ],
      },
      {
        title: "Unsupervised Learning",
        content: [
          "Clustering: K-means, hierarchical clustering",
          "Dimensionality reduction: PCA, t-SNE",
          "Association rules and market basket analysis",
          "Anomaly detection techniques",
        ],
      },
      {
        title: "Deep Learning Essentials",
        content: [
          "Neural networks: perceptrons, multi-layer networks",
          "Activation functions: sigmoid, ReLU, tanh",
          "Backpropagation and gradient descent",
          "Deep neural networks and architecture design",
          "Introduction to TensorFlow and Keras",
          "Convolutional Neural Networks (CNNs) basics",
          "Recurrent Neural Networks (RNNs) basics",
        ],
      },
      {
        title: "Model Evaluation and Selection",
        content: [
          "Confusion matrix and classification metrics",
          "ROC curves and AUC",
          "Precision, recall, and F1-score",
          "Regression metrics: MSE, RMSE, MAE, R²",
          "Hyperparameter tuning: Grid Search, Random Search",
          "Feature selection and engineering",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Implement linear regression from scratch",
          "Build a classification model comparison framework",
          "Create a neural network using TensorFlow/Keras",
          "Develop an unsupervised learning analysis pipeline",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Introduction to Predictive Analysis",
    duration: "2-3 weeks",
    learning_objectives: [
      "Understand the fundamentals of predictive analysis",
      "Learn the predictive modeling workflow",
      "Master data preprocessing and feature engineering",
      "Understand different types of prediction problems",
    ],
    topics_covered: [
      {
        title: "What is Predictive Analysis?",
        content: [
          "Definition and scope of predictive analysis",
          "Applications across industries: finance, healthcare, marketing, operations",
          "Types of predictions: numerical, categorical, time-based",
          "Predictive vs descriptive vs prescriptive analytics",
          "Business value and ROI of predictive models",
        ],
      },
      {
        title: "The Predictive Modeling Process",
        content: [
          "Business problem definition and objective setting",
          "Data collection and source identification",
          "Exploratory data analysis (EDA)",
          "Data preprocessing and cleaning",
          "Feature engineering and selection",
          "Model development and training",
          "Model evaluation and validation",
          "Deployment and monitoring",
        ],
      },
      {
        title: "Data Understanding and Exploration",
        content: [
          "Data types and quality assessment",
          "Univariate analysis: distributions, outliers, missing values",
          "Bivariate analysis: correlations, relationships",
          "Multivariate analysis: interactions and patterns",
          "Statistical summaries and visualization techniques",
          "Data profiling and quality metrics",
        ],
      },
      {
        title: "Feature Engineering Techniques",
        content: [
          "Creating new features from existing data",
          "Handling categorical variables: encoding techniques",
          "Numerical feature transformations: scaling, normalization",
          "Handling missing data: imputation strategies",
          "Feature selection methods: statistical, model-based",
          "Dimensionality reduction techniques",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Conduct comprehensive EDA on a real-world dataset",
          "Build a feature engineering pipeline",
          "Create data quality assessment tools",
          "Develop automated data preprocessing workflows",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Data Processing & Preparation Mastery",
    duration: "2-3 weeks",
    learning_objectives: [
      "Master advanced data cleaning and preprocessing techniques",
      "Learn to handle complex data quality issues",
      "Understand data transformation and normalization methods",
      "Build robust data processing pipelines",
    ],
    topics_covered: [
      {
        title: "Advanced Data Cleaning",
        content: [
          "Identifying and handling outliers: statistical and visual methods",
          "Missing data patterns and imputation strategies",
          "Data consistency and validation rules",
          "Duplicate detection and resolution",
          "Data type conversions and standardization",
          "Text data cleaning and preprocessing",
        ],
      },
      {
        title: "Data Transformation Techniques",
        content: [
          "Scaling and normalization: StandardScaler, MinMaxScaler, RobustScaler",
          "Log transformations and Box-Cox transformations",
          "Binning and discretization of continuous variables",
          "Creating interaction features and polynomial features",
          "Time-based feature extraction",
          "Geospatial data processing",
        ],
      },
      {
        title: "Handling Categorical Data",
        content: [
          "One-hot encoding and its implications",
          "Label encoding for ordinal variables",
          "Target encoding and mean encoding",
          "Handling high-cardinality categorical variables",
          "Feature hashing and embedding techniques",
          "Rare category grouping strategies",
        ],
      },
      {
        title: "Data Pipeline Development",
        content: [
          "Building reproducible data processing pipelines",
          "Pipeline versioning and documentation",
          "Error handling and data validation",
          "Automated data quality monitoring",
          "Integration with ML workflows",
          "Performance optimization for large datasets",
        ],
      },
      {
        title: "Advanced Preprocessing Techniques",
        content: [
          "Feature scaling for different algorithms",
          "Handling imbalanced datasets: SMOTE, undersampling, oversampling",
          "Time series data preprocessing",
          "Text data vectorization: TF-IDF, word embeddings",
          "Image data preprocessing for ML",
          "Multi-modal data integration",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Build a comprehensive data cleaning toolkit",
          "Create automated data quality assessment system",
          "Develop production-ready data processing pipeline",
          "Handle real-world messy datasets from different domains",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Linear Regression & Applications",
    duration: "2-3 weeks",
    learning_objectives: [
      "Master linear regression theory and implementation",
      "Learn to evaluate and interpret regression models",
      "Apply linear regression to real-world prediction problems",
      "Understand assumptions and limitations of linear models",
    ],
    topics_covered: [
      {
        title: "Linear Regression Theory",
        content: [
          "Mathematical foundation of linear regression",
          "Ordinary Least Squares (OLS) method",
          "Assumptions of linear regression",
          "Coefficient interpretation and statistical significance",
          "R-squared and adjusted R-squared",
          "Residual analysis and diagnostic plots",
        ],
      },
      {
        title: "Multiple Linear Regression",
        content: [
          "Extending to multiple predictors",
          "Multicollinearity detection and handling",
          "Feature selection techniques",
          "Interaction terms and polynomial features",
          "Model complexity and regularization",
          "Stepwise regression methods",
        ],
      },
      {
        title: "Advanced Linear Regression Techniques",
        content: [
          "Ridge Regression: L2 regularization",
          "Lasso Regression: L1 regularization and feature selection",
          "Elastic Net: combining L1 and L2 regularization",
          "Cross-validation for hyperparameter tuning",
          "Learning curves and validation curves",
          "Handling non-linear relationships",
        ],
      },
      {
        title: "Model Evaluation and Diagnostics",
        content: [
          "Residual analysis: normality, homoscedasticity, independence",
          "Outlier detection and influence measures",
          "Model assumptions testing",
          "Performance metrics: MSE, RMSE, MAE, MAPE",
          "Confidence intervals and prediction intervals",
          "Model comparison and selection criteria",
        ],
      },
      {
        title: "Real-World Projects",
        content: [
            "Predict employee salaries based on various factors",
            "Business Profit Prediction",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Implement linear regression from scratch using NumPy",
          "Build interactive salary prediction web application",
          "Develop profit forecasting model with confidence intervals",
          "Create comprehensive regression analysis toolkit",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Boston Housing Price Prediction",
    duration: "2-3 weeks",
    learning_objectives: [
      "Apply regression techniques to the classic Boston Housing dataset",
      "Master feature engineering for real estate prediction",
      "Learn advanced model evaluation techniques",
      "Understand the impact of different factors on housing prices",
    ],
    topics_covered: [
      {
        title: "Boston Housing Dataset Deep Dive",
        content: [
          "Dataset overview and feature description",
          "Historical context and data collection methodology",
          "Exploratory data analysis and visualization",
          "Feature correlations and relationships",
          "Identifying key price drivers and patterns",
        ],
      },
      {
        title: "Feature Engineering for Housing Data",
        content: [
          "Creating meaningful features from existing variables",
          "Geographic and location-based features",
          "Interaction effects between features",
          "Polynomial features for non-linear relationships",
          "Feature scaling and transformation techniques",
          "Handling categorical variables (if any)",
        ],
      },
      {
        title: "Model Development and Comparison",
        content: [
          "Baseline linear regression model",
          "Polynomial regression for capturing non-linearity",
          "Regularized regression: Ridge, Lasso, Elastic Net",
          "Tree-based models: Decision Trees, Random Forest",
          "Model ensemble techniques",
          "Hyperparameter optimization",
        ],
      },
      {
        title: "Advanced Analysis Techniques",
        content: [
          "Feature importance analysis",
          "Partial dependence plots",
          "SHAP (SHapley Additive exPlanations) values",
          "Model interpretability and explainability",
          "Sensitivity analysis and what-if scenarios",
          "Residual analysis and model diagnostics",
        ],
      },
      {
        title: "Real Estate Prediction Framework",
        content: [
          "Building a generalizable housing price prediction system",
          "Incorporating external data sources (economic indicators, demographics)",
          "Time-based validation for temporal data",
          "Model updating and retraining strategies",
          "Production deployment considerations",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Complete Boston Housing price prediction with multiple algorithms",
          "Build interactive housing price prediction dashboard",
          "Create feature importance and interpretability analysis",
          "Develop generalized real estate valuation model",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Logistic Regression & Classification",
    duration: "2-3 weeks",
    learning_objectives: [
      "Master logistic regression theory and implementation",
      "Learn binary and multiclass classification techniques",
      "Understand probability estimation and decision boundaries",
      "Apply classification to real-world problems",
    ],
    topics_covered: [
      {
        title: "Logistic Regression Fundamentals",
        content: [
          "From linear to logistic regression",
          "Sigmoid function and probability interpretation",
          "Maximum Likelihood Estimation (MLE)",
          "Odds ratio and log-odds interpretation",
          "Coefficient significance and confidence intervals",
          "Assumptions and limitations",
        ],
      },
      {
        title: "Binary Classification with Logistic Regression",
        content: [
          "Binary classification framework",
          "Decision boundaries and thresholds",
          "Probability calibration and interpretation",
          "Feature selection for classification",
          "Regularization: L1 and L2 penalties",
          "Handling class imbalance",
        ],
      },
      {
        title: "Multiclass Classification",
        content: [
          "One-vs-Rest (OvR) approach",
          "One-vs-One (OvO) approach",
          "Multinomial logistic regression",
          "Softmax function and probability distribution",
          "Performance evaluation for multiclass problems",
          "Confusion matrix analysis",
        ],
      },
      {
        title: "Model Evaluation for Classification",
        content: [
          "Accuracy, precision, recall, and F1-score",
          "ROC curves and AUC analysis",
          "Precision-Recall curves",
          "Classification thresholds optimization",
          "Cross-validation for classification",
          "Statistical significance testing",
        ],
      },
      {
        title: "Real-World Projects",
        content: [
          "Project 1: Diabetes Prediction System",
          "Project 2: Credit Risk Assessment",
        ],
      },
      {
        title: "Project 1: Diabetes Prediction System",
        content: [
          "Dataset: Pima Indians Diabetes Database",
          "Objective: Predict diabetes onset based on medical indicators",
          "Features: Glucose levels, BMI, blood pressure, age, family history",
          "Techniques: Logistic regression, feature scaling, threshold optimization",
          "Medical Impact: Early detection and preventive healthcare",
          "Model Interpretability: Understanding risk factors",
        ],
      },
      {
        title: "Project 2: Credit Risk Assessment",
        content: [
          "Dataset: Credit approval and default data",
          "Objective: Predict loan default probability and credit worthiness",
          "Features: Credit history, income, debt-to-income ratio, employment",
          "Techniques: Logistic regression, class imbalance handling, cost-sensitive learning",
          "Business Impact: Risk management and lending decisions",
          "Regulatory Compliance: Model explainability for financial regulations",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Implement logistic regression from scratch",
          "Build diabetes risk assessment web application",
          "Develop credit scoring model with interpretability features",
          "Create comprehensive classification evaluation framework",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Advanced Predictive Modeling",
    duration: "3-4 weeks",
    learning_objectives: [
      "Learn advanced machine learning algorithms for prediction",
      "Master ensemble methods and model combination techniques",
      "Understand time series forecasting",
      "Apply deep learning to prediction problems",
    ],
    topics_covered: [
      {
        title: "Tree-Based Models",
        content: [
          "Decision Trees: splitting criteria, pruning, visualization",
          "Random Forest: bagging, feature importance, out-of-bag error",
          "Gradient Boosting: XGBoost, LightGBM, CatBoost",
          "Model interpretation and feature importance",
          "Hyperparameter tuning for tree models",
          "Handling categorical features in tree models",
        ],
      },
      {
        title: "Ensemble Methods",
        content: [
          "Bagging and bootstrapping",
          "Boosting algorithms: AdaBoost, Gradient Boosting",
          "Stacking and blending techniques",
          "Voting classifiers and regressors",
          "Model diversity and ensemble optimization",
          "Cross-validation for ensemble methods",
        ],
      },
      {
        title: "Time Series Forecasting",
        content: [
          "Time series components: trend, seasonality, noise",
          "Autocorrelation and stationarity",
          "ARIMA models and seasonal decomposition",
          "Prophet for time series forecasting",
          "Feature engineering for time series",
          "Evaluation metrics for forecasting",
        ],
      },
      {
        title: "Deep Learning for Prediction",
        content: [
          "Neural networks for regression and classification",
          "Architecture design and optimization",
          "Regularization techniques: dropout, batch normalization",
          "Keras and TensorFlow implementation",
          "Deep learning for time series (LSTM, GRU)",
          "Transfer learning and pre-trained models",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Build ensemble models for complex prediction tasks",
          "Develop time series forecasting system",
          "Create deep learning models for prediction",
          "Compare different advanced algorithms on same datasets",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Model Deployment & Production",
    duration: "2-3 weeks",
    learning_objectives: [
      "Learn to deploy predictive models to production",
      "Understand model monitoring and maintenance",
      "Master MLOps practices for predictive systems",
      "Build scalable prediction services",
    ],
    topics_covered: [
      {
        title: "Model Deployment Strategies",
        content: [
          "Batch vs real-time prediction",
          "REST APIs for model serving",
          "Containerization with Docker",
          "Cloud deployment: AWS, GCP, Azure",
          "Model versioning and A/B testing",
          "Performance optimization for production",
        ],
      },
      {
        title: "MLOps for Predictive Models",
        content: [
          "CI/CD pipelines for ML models",
          "Model monitoring and drift detection",
          "Automated retraining strategies",
          "Data pipeline orchestration",
          "Model governance and compliance",
          "Error handling and fallback mechanisms",
        ],
      },
      {
        title: "Scalability and Performance",
        content: [
          "Model optimization techniques",
          "Caching strategies for predictions",
          "Load balancing and auto-scaling",
          "Database integration for features",
          "Real-time feature engineering",
          "Edge computing for predictions",
        ],
      },
      {
        title: "Hands-on Projects",
        content: [
          "Deploy salary prediction model as REST API",
          "Build model monitoring dashboard",
          "Create automated retraining pipeline",
          "Develop production-ready prediction service",
        ],
      },
    ],
  },
];

const PredictiveCurriculum = () => {
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

export default PredictiveCurriculum;
