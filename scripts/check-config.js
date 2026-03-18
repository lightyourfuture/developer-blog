#!/usr/bin/env node

/**
 * Configuration Checker
 * Validates that all required environment variables are set
 */

const fs = require('fs');
const path = require('path');

const ENV_FILE = path.join(process.cwd(), '.env.local');

console.log('🔍 检查配置...\n');

// Check if .env.local exists
if (!fs.existsSync(ENV_FILE)) {
  console.error('❌ 错误: .env.local 文件不存在');
  console.log('💡 运行: cp .env.local.example .env.local');
  process.exit(1);
}

// Read .env.local
const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
const lines = envContent.split('\n');

// Parse environment variables
const env = {};
lines.forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    const value = valueParts.join('=').trim();
    if (key && value) {
      env[key] = value;
    }
  }
});

// Required variables
const required = {
  supabase: [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY'
  ],
  giscus: [
    'NEXT_PUBLIC_GISCUS_REPO',
    'NEXT_PUBLIC_GISCUS_REPO_ID',
    'NEXT_PUBLIC_GISCUS_CATEGORY',
    'NEXT_PUBLIC_GISCUS_CATEGORY_ID'
  ]
};

// Check Supabase
console.log('📦 Supabase 配置:');
let supabaseOk = true;
required.supabase.forEach(key => {
  const value = env[key];
  const isSet = value && !value.startsWith('your_') && value !== 'your_supabase_project_url' && value !== 'your_supabase_anon_key';
  
  if (isSet) {
    console.log(`  ✅ ${key}`);
  } else {
    console.log(`  ❌ ${key} - 未配置`);
    supabaseOk = false;
  }
});

if (!supabaseOk) {
  console.log('\n💡 配置 Supabase:');
  console.log('   1. 访问 https://supabase.com/dashboard');
  console.log('   2. 创建项目并获取 API 密钥');
  console.log('   3. 填写到 .env.local 文件');
  console.log('   详细步骤: docs/QUICK-CONFIG.md\n');
}

// Check Giscus
console.log('\n💬 Giscus 配置:');
let giscusOk = true;
required.giscus.forEach(key => {
  const value = env[key];
  let isSet = false;
  
  if (key === 'NEXT_PUBLIC_GISCUS_CATEGORY') {
    // Category can be "General" or any other valid category name
    isSet = value && value.length > 0;
  } else {
    isSet = value && 
      value !== 'username/repo' && 
      !value.startsWith('your_');
  }
  
  if (isSet) {
    console.log(`  ✅ ${key}`);
  } else {
    console.log(`  ❌ ${key} - 未配置`);
    giscusOk = false;
  }
});

if (!giscusOk) {
  console.log('\n💡 配置 Giscus:');
  console.log('   1. 启用 GitHub Discussions');
  console.log('   2. 安装 Giscus app');
  console.log('   3. 访问 https://giscus.app/ 获取配置');
  console.log('   4. 填写到 .env.local 文件');
  console.log('   详细步骤: docs/QUICK-CONFIG.md\n');
}

// Summary
console.log('\n' + '='.repeat(50));
if (supabaseOk && giscusOk) {
  console.log('✅ 所有配置完成！');
  console.log('\n🚀 运行 npm run dev 启动开发服务器');
  process.exit(0);
} else {
  console.log('⚠️  配置未完成');
  console.log('\n📚 查看配置指南: docs/QUICK-CONFIG.md');
  console.log('📚 详细文档: docs/CONFIGURATION-GUIDE.md');
  process.exit(1);
}
