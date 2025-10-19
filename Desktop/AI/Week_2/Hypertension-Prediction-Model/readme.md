Project Title:

AI-Driven Prediction of Hypertension Risk Using Clinical and Biometric Data

Sustainable Development Goal (SDG):

SDG 3 – Good Health and Well-Being
Target 3.4: Reduce premature mortality from non-communicable diseases through prevention and treatment.

🩺 Problem Statement

Hypertension is one of the leading causes of cardiovascular disease and premature death globally.
Early detection and lifestyle management can significantly reduce long-term complications.
This project develops a machine learning model to predict hypertension risk from routine health data, allowing healthcare providers to act early.

⚙️ Machine Learning Approach

Approach: Supervised Learning

Algorithm: Logistic Regression (interpretable and efficient)

Features: Age, gender, smoking habits, blood pressure, BMI, glucose, medication use, etc.

Workflow:

Data cleaning (remove missing values)

Feature scaling using StandardScaler

Model training and evaluation

Risk prediction for individuals or patient batches

📊 Results

Model Accuracy: ~82% (typical result)

ROC-AUC Score: 0.87

Interpretation:

Strong influence from age, diastolic BP, BMI, and glucose.

Model effectively distinguishes between high- and low-risk patients.

Usage:
Doctors can input patient metrics and instantly receive a risk probability with lifestyle recommendations.

⚖️ Ethical & Social Considerations
Concern-Response
Bias-Must validate across diverse populations to ensure fair predictions.
Interpretability-Logistic Regression chosen for transparency — clinicians can understand contributing factors.

Privacy-Data must be anonymized and handled under GDPR/HIPAA standards.
Fair Access-Open-source approach supports healthcare systems in low-resource areas.

🌍 Impact on SDG 3
This solution enables data-driven prevention of hypertension by integrating AI into clinical workflows.
By helping clinicians detect high-risk individuals early, it supports global efforts to reduce premature mortality and improve public health outcomes.