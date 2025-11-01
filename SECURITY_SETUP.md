# Security Setup Guide

## 🔐 Environment Configuration

This project uses environment variables to manage sensitive configuration. **NEVER** commit credentials to version control.

## Setup Instructions

### Frontend Setup

1. Navigate to the `frontend` directory
2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` and fill in your actual credentials:
   ```env
   REACT_APP_MQTT_URL=mqtts://your-mqtt-broker.example.com:443
   REACT_APP_MQTT_USERNAME=your_actual_username
   REACT_APP_MQTT_PASSWORD=your_actual_password
   REACT_APP_MQTT_TOPIC=your-topic-name
   ```

### Executor Setup

1. Navigate to the `executor` directory
2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` and fill in your actual credentials:
   ```env
   MQTT_BROKER_URL=mqtts://your-mqtt-broker.example.com:443
   MQTT_USERNAME=your_actual_username
   MQTT_PASSWORD=your_actual_password
   MQTT_TOPIC=commands
   MQTT_CLIENT_ID=go-mqtt-ai-executor
   AI_MODEL_URL=http://localhost:8080/generate-shell
   ```

## ⚠️ Important Security Notes

1. **Never commit `.env` files** - They are listed in `.gitignore`
2. **Rotate credentials regularly** - Change passwords periodically
3. **Use strong passwords** - Minimum 16 characters with mixed case, numbers, and symbols
4. **Different credentials per environment** - Dev, staging, and production should have separate credentials
5. **Limit MQTT permissions** - Use least-privilege principle for MQTT broker access
6. **Use TLS/SSL** - Always use `mqtts://` (not `mqtt://`) for secure connections

## 🔒 What to Do If Credentials Are Exposed

If you accidentally commit credentials:

1. **Immediately rotate all exposed credentials** at your MQTT broker
2. **Remove credentials from code** (use this guide to set up environment variables)
3. **Clean git history** using one of these methods:

### Method 1: BFG Repo-Cleaner (Recommended)
```bash
# Install BFG
brew install bfg  # macOS
# or download from https://rtyley.github.io/bfg-repo-cleaner/

# Remove passwords from history
bfg --replace-text passwords.txt  # Create passwords.txt with words to remove
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push --force
```

### Method 2: Git Filter-Branch
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/file/with/credentials" \
  --prune-empty --tag-name-filter cat -- --all

git push --force --all
```

### Method 3: Start Fresh (If repo is new)
```bash
# Delete the GitHub repository
# Remove .git folder locally
rm -rf .git
# Initialize new repo
git init
git add .
git commit -m "Initial commit with secure configuration"
# Push to new GitHub repo
```

## 📋 Verification Checklist

Before pushing to GitHub:
- [ ] All `.env` files are in `.gitignore`
- [ ] No hardcoded credentials in source code
- [ ] `.env.example` files contain only placeholders
- [ ] README updated with setup instructions
- [ ] All team members know not to commit `.env` files
- [ ] MQTT broker credentials are unique and strong

## 🛡️ Additional Security Recommendations

1. **Enable 2FA** on your GitHub account
2. **Use GitHub secret scanning** to detect accidentally committed secrets
3. **Set up pre-commit hooks** to prevent credential commits
4. **Regular security audits** of your codebase
5. **Monitor MQTT broker logs** for unauthorized access attempts

## Need Help?

If you have questions about security setup, please contact your team lead or security team.
