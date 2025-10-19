# ----------------------------------------------
# 1. Import necessary libraries
# ----------------------------------------------
import numpy as np                          # For numerical operations
import pandas as pd                         # For loading CSV data
from sklearn.preprocessing import StandardScaler  # For feature scaling
from sklearn.linear_model import LogisticRegression  # Our classifier
from sklearn.model_selection import train_test_split  # For splitting data
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score  # Evaluation metrics

# ----------------------------------------------
# 2. Load and inspect dataset
# ----------------------------------------------
data = pd.read_csv("Hypertension-risk-model-main.csv")

print("Sample of dataset:")
print(data.head())

# Check for missing values
print("\nMissing values per column:")
print(data.isnull().sum())

# Drop rows with missing values (optional: you could impute instead)
data = data.dropna()

# ----------------------------------------------
# 3. Define features (X) and target (y)
# ----------------------------------------------
X = data.drop("Risk", axis=1)   # Features (all except target)
y = data["Risk"]                # Target (0 = no HTN, 1 = HTN)

# ----------------------------------------------
# 4. Split into train/test sets
# ----------------------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

# ----------------------------------------------
# 5. Normalize (scale) features
# ----------------------------------------------
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# ----------------------------------------------
# 6. Initialize and train Logistic Regression model
# ----------------------------------------------
model = LogisticRegression(max_iter=4000)
model.fit(X_train_scaled, y_train)

# ----------------------------------------------
# 7. Evaluate model performance
# ----------------------------------------------
y_pred = model.predict(X_test_scaled)
y_prob = model.predict_proba(X_test_scaled)[:, 1]

print("\n🔹 Model Evaluation Report:")
print(classification_report(y_test, y_pred))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("ROC-AUC Score:", round(roc_auc_score(y_test, y_prob), 3))

# ----------------------------------------------
# 8. Generate individual risk predictions
# ----------------------------------------------
results = X_test.copy()
results["Actual_Risk"] = y_test.values
results["Predicted_Risk"] = y_pred
results["Risk_Probability"] = y_prob.round(3)

print("\nSample predictions with risk probabilities:")
print(results.head(10))