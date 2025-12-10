import React from 'react';
import DocsLayout from '../components/docs/docs-layout';
import ApiEndpointViewer from '../components/docs/api-endpoint-viewer';
import { DocSection } from '../types/docs-types';
import { Shield, Lock, Zap, Server, Globe, Download, Bot } from 'lucide-react';

const sections: DocSection[] = [
  { id: 'introduction', title: 'Introduction' },
  { 
    id: 'api-endpoints', 
    title: '1. API Endpoints',
    subsections: [
      { id: 'config-base', title: 'Base Configuration' },
      { id: 'agent-endpoints', title: 'Agent Endpoints' },
      { id: 'treasury-endpoints', title: 'Treasury & Payments' }
    ]
  },
  {
    id: 'authentication',
    title: '2. Authentication',
    subsections: [
      { id: 'user-auth', title: 'User Auth (JWT)' },
      { id: 'agent-auth', title: 'Agent Auth (x402)' }
    ]
  },
  { id: 'onboarding', title: '3. Registration & Onboarding' },
  { 
    id: 'usage-guides', 
    title: '4. Usage Guides',
    subsections: [
      { id: 'cross-border', title: 'Cross-Border Payment' },
      { id: 'multisig', title: 'Multi-Signature' }
    ]
  },
  { 
    id: 'architecture', 
    title: '5. Concepts & Architecture',
    subsections: [
      { id: 'zero-trust', title: 'Zero-Trust Architecture' },
      { id: 'tx-flow', title: 'Transaction Flow' }
    ]
  },
  { id: 'sdks', title: '6. SDKs & Libraries' },
  { id: 'webhooks', title: '7. Webhooks' },
  { id: 'errors', title: '8. Errors & Troubleshooting' },
  { id: 'security', title: '9. Security' },
  { id: 'resources', title: '10. Additional Resources' }
];

const DocumentationPage: React.FC = () => {
  return (
    <DocsLayout sections={sections}>
      
      {/* Introduction */}
      <section id="introduction" className="mb-20 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              SnowRail Documentation
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Technical documentation for integrating, using, and understanding the architecture of SnowRail, 
              the autonomous treasury orchestration platform on Avalanche.
            </p>
          </div>
          
          <a 
            href="/context/snowrail-ai-context.json" 
            download="snowrail-ai-context.json"
            className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group self-start whitespace-nowrap"
            title="Download full project context for AI Agents"
          >
            <Bot className="w-5 h-5 text-electric-blue" />
            <div className="text-left">
              <div className="text-sm font-bold text-white group-hover:text-electric-blue transition-colors">AI Context</div>
              <div className="text-[10px] text-gray-500">Download JSON for LLMs</div>
            </div>
            <Download className="w-4 h-4 text-gray-500 group-hover:text-white ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="text-electric-blue w-5 h-5" />
              <h3 className="font-bold text-white">Fast Settlement</h3>
            </div>
            <p className="text-sm">Instant settlement (&lt;30s) on Avalanche Subnets.</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-snow-red w-5 h-5" />
              <h3 className="font-bold text-white">Zero-Trust</h3>
            </div>
            <p className="text-sm">Cryptographically verified treasury management.</p>
          </div>
        </div>
      </section>

      {/* 1. API Endpoints */}
      <section id="api-endpoints" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Server className="text-electric-blue" />
          1. API Endpoints
        </h2>
        <p className="mb-6">
          The SnowRail API allows interaction with treasury, payment management, and agent identity queries.
        </p>

        <div id="config-base" className="mb-12 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Base Configuration</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li><strong>Staging (Fuji Testnet):</strong> <code className="bg-white/10 px-2 py-1 rounded text-sm text-electric-blue">https://staging-api.snowrail.xyz</code></li>
            <li><strong>Production (Avalanche Mainnet):</strong> <code className="bg-white/10 px-2 py-1 rounded text-sm text-electric-blue">https://api.snowrail.xyz</code></li>
            <li><strong>Content-Type:</strong> <code className="bg-white/10 px-2 py-1 rounded text-sm">application/json</code></li>
          </ul>
        </div>

        <div id="agent-endpoints" className="mb-12 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Agent Endpoints (ERC-8004)</h3>
          
          <ApiEndpointViewer 
            endpoint={{
              method: 'GET',
              path: '/api/agent/identity',
              description: 'Obtains the identity card of the ERC-8004 compatible agent.',
              responseBody: {
                language: 'json',
                code: `{
  "erc8004Version": "1.0",
  "agent": {
    "id": "snowrail-treasury-v1",
    "name": "SnowRail Treasury Agent",
    "capabilities": ["treasury_management", "cross_border_payments"],
    "protocols": ["x402", "erc8004", "eip3009", "arweave"],
    "networks": ["avalanche", "avalanche-fuji"]
  },
  "metering": {
    "resources": [
      {
        "id": "payroll_execute",
        "price": "1",
        "asset": "USDC",
        "chain": "avalanche"
      }
    ]
  }
}`
              }
            }}
          />

          <ApiEndpointViewer 
            endpoint={{
              method: 'GET',
              path: '/api/agent/activity',
              description: 'Retrieves payroll execution history with immutable receipts on Arweave.',
              responseBody: {
                language: 'json',
                code: `{
  "activity": [
    {
      "id": "pay_123",
      "status": "PAID",
      "totalAmount": "1000.00",
      "currency": "USD",
      "arweave": {
        "url": "https://arweave.net/txId...",
        "status": "Immutable • Verifiable"
      }
    }
  ]
}`
              }
            }}
          />
        </div>

        <div id="treasury-endpoints" className="mb-12 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Treasury & Payments (x402 Protected)</h3>
          <p className="mb-4 text-sm bg-snow-red/10 border border-snow-red/20 p-4 rounded-lg text-snow-red">
            These endpoints require prior payment via the x402 protocol.
          </p>

          <ApiEndpointViewer 
            endpoint={{
              method: 'POST',
              path: '/api/payment/process',
              description: 'Processes an individual payment combining on-chain settlement and fiat exit via Rail.',
              requestBody: {
                language: 'json',
                code: `{
  "recipient": "john@example.com",
  "amount": 100.00,
  "currency": "USD",
  "customer": {
    "first_name": "John",
    "last_name": "Doe",
    "email_address": "john@example.com"
  }
}`
              },
              responseBody: {
                language: 'json',
                code: `{
  "paymentId": "pmt_456",
  "status": "PAID",
  "transactions": {
    "onchain": "0x123...",
    "rail_withdrawal_id": "w_789"
  }
}`
              },
              errorResponse: {
                language: 'json',
                code: `{
  "error": "PAYMENT_REQUIRED",
  "metering": {
    "price": "1",
    "asset": "USDC",
    "meterId": "payroll_execute"
  }
}`
              }
            }}
          />

          <ApiEndpointViewer 
            endpoint={{
              method: 'GET',
              path: '/api/treasury/balance',
              description: 'Queries the available balance in the treasury contract.',
              responseBody: {
                language: 'json',
                code: `{
  "balance": "50000.00",
  "asset": "USDC",
  "network": "avalanche-fuji",
  "contractAddress": "0xcba2318C..."
}`
              }
            }}
          />
        </div>
      </section>

      {/* 2. Authentication */}
      <section id="authentication" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Lock className="text-electric-blue" />
          2. Authentication & Authorization
        </h2>
        <p className="mb-6">
          SnowRail uses a hybrid authentication system: <strong>JWT</strong> for human users (Dashboard) and <strong>x402</strong> for machine-to-machine interactions (Agents).
        </p>

        <div id="user-auth" className="mb-10 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">User Authentication (JWT)</h3>
          <p className="mb-4">For accessing the administrative dashboard.</p>
          <ul className="space-y-3 ml-4 border-l-2 border-white/10 pl-4">
            <li>
              <strong className="text-white">Login:</strong> <code className="text-sm">POST /auth/login</code> with <code>{`{ email, password }`}</code>. Returns a Bearer Token.
            </li>
            <li>
              <strong className="text-white">Sign Up:</strong> <code className="text-sm">POST /auth/signup</code> creates an account and Level 0 KYB entity.
            </li>
            <li>
              <strong className="text-white">Usage:</strong> Include header <code className="text-electric-blue">Authorization: Bearer &lt;token&gt;</code>.
            </li>
          </ul>
        </div>

        <div id="agent-auth" className="mb-10 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Agent Authentication (x402 Protocol)</h3>
          <p className="mb-4">For executing payment operations programmatically.</p>
          <ol className="list-decimal list-inside space-y-3 ml-4 text-gray-300">
            <li><strong>Discovery:</strong> The agent requests the resource and receives a <code>402 Payment Required</code>.</li>
            <li><strong>Signing:</strong> The agent signs an EIP-3009 authorization (USDC Permit) locally.</li>
            <li><strong>Redemption:</strong> The agent sends the request again with the <code>X-PAYMENT</code> header containing the signed authorization.</li>
            <li><strong>Execution:</strong> SnowRail validates the signature, settles funds on-chain, and executes the requested operation.</li>
          </ol>
        </div>
      </section>

      {/* 3. Onboarding */}
      <section id="onboarding" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Globe className="text-electric-blue" />
          3. Registration & Onboarding
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h4 className="font-bold text-white mb-2">1. Create Account</h4>
            <p className="text-sm">Register at <code className="text-electric-blue">/auth/signup</code> with corporate email and legal name.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h4 className="font-bold text-white mb-2">2. KYB (Know Your Business)</h4>
            <p className="text-sm">Complete corporate identity verification to enable fiat rails (Rail API).</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h4 className="font-bold text-white mb-2">3. Wallet Configuration</h4>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Deploy <code>SnowRailTreasury</code> contract (see Contracts section).</li>
              <li>Fund the contract with USDC (Avalanche C-Chain).</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h4 className="font-bold text-white mb-2">4. API Keys</h4>
            <p className="text-sm">Generate API Keys in the dashboard for legacy integrations (if not using x402).</p>
          </div>
        </div>
      </section>

      {/* 4. Usage Guides */}
      <section id="usage-guides" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">4. Usage Guides</h2>

        <div id="cross-border" className="mb-12 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Cross-Border Payment (Full Flow)</h3>
          <ol className="relative border-l border-gray-700 ml-4 space-y-6">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900">
                <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
              </span>
              <h4 className="font-bold text-white">Request</h4>
              <p className="text-sm mt-1">Client sends beneficiary details and amount in USD.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900">
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              </span>
              <h4 className="font-bold text-white">Fund Lock</h4>
              <p className="text-sm mt-1">Backend verifies USDC balance in <code>SnowRailTreasury</code>.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900">
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              </span>
              <h4 className="font-bold text-white">On-Chain Settlement</h4>
              <p className="text-sm mt-1"><code>executePayment()</code> is executed on the contract, moving USDC to the settlement account.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900">
                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              </span>
              <h4 className="font-bold text-white">Fiat Exit</h4>
              <p className="text-sm mt-1">Once on-chain tx is confirmed, Rail API is called to initiate ACH/Wire transfer.</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-navy-900 rounded-full -left-3 ring-8 ring-navy-900">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              <h4 className="font-bold text-white">Receipt</h4>
              <p className="text-sm mt-1">Permanent record generated on Arweave linking on-chain tx with fiat withdrawal ID.</p>
            </li>
          </ol>
        </div>

        <div id="multisig" className="mb-12 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Multi-Signature Workflows</h3>
          <p className="p-4 bg-white/5 rounded-lg border border-white/10">
            For high-value operations, configure the <code>SnowRailTreasury</code> contract with <strong>Gnosis Safe</strong> as <code>owner</code>. 
            All calls to <code>executePayment</code> will require m-of-n approval in the Safe before processing.
          </p>
        </div>
      </section>

      {/* 5. Architecture */}
      <section id="architecture" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">5. Concepts & Architecture</h2>

        <div id="zero-trust" className="mb-8 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Zero-Trust Architecture</h3>
          <p className="mb-4">SnowRail does not custody private funds.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Smart Contract:</strong> Holds funds. Only releases funds under strict cryptographic conditions.</li>
            <li><strong>Backend:</strong> Acts only as orchestrator, coordinating signals between chain and bank, without direct access to master private keys (production uses MPC signers).</li>
          </ul>
        </div>

        <div id="tx-flow" className="mb-8 scroll-mt-32">
          <h3 className="text-xl font-bold mb-4 text-white">Transaction Flow</h3>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 overflow-x-auto">
            <div className="min-w-[600px] flex items-center justify-between gap-4 text-sm font-mono">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-navy-800 rounded-lg mb-2 border border-white/10">Agent/User</div>
                <div className="text-xs text-gray-500">x402 Auth</div>
              </div>
              <div className="h-[2px] flex-1 bg-white/10 relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-white/10 rotate-45"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-navy-800 rounded-lg mb-2 border border-electric-blue/30 text-electric-blue">SnowRail API</div>
                <div className="text-xs text-gray-500">Orchestrator</div>
              </div>
              <div className="h-[2px] flex-1 bg-white/10 relative">
                 <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-white/10 rotate-45"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-navy-800 rounded-lg mb-2 border border-white/10">Treasury</div>
                <div className="text-xs text-gray-500">Smart Contract</div>
              </div>
              <div className="h-[2px] flex-1 bg-white/10 relative">
                 <div className="absolute -right-1 -top-1 w-2 h-2 border-r-2 border-t-2 border-white/10 rotate-45"></div>
              </div>
               <div className="flex flex-col items-center">
                <div className="p-3 bg-navy-800 rounded-lg mb-2 border border-white/10">Rail API</div>
                <div className="text-xs text-gray-500">Fiat Exit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-white">Smart Contracts</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-white/5 rounded-lg">
              <div className="font-mono font-bold text-electric-blue mb-2">SnowRailTreasury.sol</div>
              <ul className="list-disc list-inside text-sm text-gray-400 ml-2">
                <li><code>requestPayment()</code>: Emits payment intention event.</li>
                <li><code>executePayment()</code>: Transfers ERC-20 tokens.</li>
                <li><code>executeSwap()</code>: Performs currency swaps via Trader Joe (e.g., AVAX -&gt; USDC) to maintain stable liquidity.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. SDKs */}
      <section id="sdks" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">6. SDKs & Libraries</h2>
        <h3 className="text-xl font-bold mb-4 text-white">TypeScript Client (Frontend/Node)</h3>
        <p className="mb-4">Implementation example using native <code>fetch</code> to invoke an x402 protected payroll.</p>
        
        <div className="bg-navy-900 rounded-xl overflow-hidden border border-white/10 p-4">
          <pre className="text-sm font-mono text-gray-300 leading-relaxed overflow-x-auto">
            <code>{`import { getPaymentProofFromFacilitator } from './utils';

async function executePayroll() {
  // 1. Attempt execution (will fail with 402)
  const initialRes = await fetch('https://api.snowrail.xyz/api/payroll/execute', {
    method: 'POST',
    body: JSON.stringify({ payrollId: 'pay_001' })
  });

  if (initialRes.status === 402) {
    const { metering, meterId } = await initialRes.json();
    
    // 2. Get payment proof (EIP-3009 Signature)
    const proof = await getPaymentProofFromFacilitator(metering, meterId);
    
    // 3. Retry with payment header
    const finalRes = await fetch('https://api.snowrail.xyz/api/payroll/execute', {
      method: 'POST',
      headers: { 'X-PAYMENT': proof },
      body: JSON.stringify({ payrollId: 'pay_001' })
    });
    
    return await finalRes.json();
  }
}`}</code>
          </pre>
        </div>
      </section>

      {/* 7. Webhooks */}
      <section id="webhooks" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">7. Webhooks</h2>
        <p className="mb-6">SnowRail allows subscription to events for state synchronization.</p>
        
        <div className="mb-8">
           <h3 className="text-xl font-bold mb-4 text-white">Reception Endpoint</h3>
           <p className="text-sm text-gray-400 mb-2">Configure your URL in the dashboard to receive <code>POST</code> requests.</p>
           <p className="text-sm text-gray-400">The backend verifies authenticity using <code>X-Callback-Secret</code>.</p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase">
                <th className="py-3 px-4">Event</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Payload</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-electric-blue">payment.onchain_confirmed</td>
                <td className="py-3 px-4">Payment settled on blockchain</td>
                <td className="py-3 px-4 font-mono text-xs">{`{ txHash, amount, token }`}</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-electric-blue">payment.rail_processed</td>
                <td className="py-3 px-4">Fiat transfer completed</td>
                <td className="py-3 px-4 font-mono text-xs">{`{ withdrawalId, status }`}</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-electric-blue">payment.failed</td>
                <td className="py-3 px-4">Failure at any stage</td>
                <td className="py-3 px-4 font-mono text-xs">{`{ error, step, payrollId }`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl border border-white/10 bg-white/5">
          <h4 className="font-bold text-white mb-2 text-sm">Example Payload</h4>
          <pre className="text-xs font-mono text-gray-300 overflow-x-auto">
{`{
  "event": "payment.onchain_confirmed",
  "data": {
    "payrollId": "pay_123",
    "txHash": "0xabc...",
    "timestamp": "2025-12-10T10:00:00Z"
  }
}`}
          </pre>
        </div>
      </section>

      {/* 8. Errors */}
      <section id="errors" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">8. Errors & Troubleshooting</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase">
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">HTTP</th>
                <th className="py-3 px-4">Meaning</th>
                <th className="py-3 px-4">Solution</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-snow-red">PAYMENT_REQUIRED</td>
                <td className="py-3 px-4 font-mono">402</td>
                <td className="py-3 px-4">Missing x402 payment</td>
                <td className="py-3 px-4">Sign and send <code>X-PAYMENT</code> header.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-snow-red">INSUFFICIENT_FUNDS</td>
                <td className="py-3 px-4 font-mono">400</td>
                <td className="py-3 px-4">Treasury empty</td>
                <td className="py-3 px-4">Send USDC to <code>SnowRailTreasury</code> contract.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-snow-red">INVALID_SIGNATURE</td>
                <td className="py-3 px-4 font-mono">401</td>
                <td className="py-3 px-4">Invalid EIP-3009 Sig</td>
                <td className="py-3 px-4">Verify <code>nonce</code> and <code>chainId</code> when signing.</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-snow-red">RAIL_ERROR</td>
                <td className="py-3 px-4 font-mono">502</td>
                <td className="py-3 px-4">Fiat provider error</td>
                <td className="py-3 px-4">Check Rail account limits or beneficiary data.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Security */}
      <section id="security" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">9. Security</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h4 className="font-bold text-white mb-2">Best Practices</h4>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
              <li><strong>Key Rotation:</strong> Use temporary session keys for signers.</li>
              <li><strong>Spending Limits:</strong> Configure <code>allowances</code> in contract to limit damage in case of compromise.</li>
              <li><strong>Webhook Verification:</strong> Always validate <code>X-Callback-Secret</code> to avoid replay attacks.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
             <h4 className="font-bold text-white mb-2">Audit</h4>
             <p className="text-sm text-gray-400">
               The <code>SnowRailTreasury</code> contract uses standard OpenZeppelin libraries (<code>IERC20</code>) and is designed to minimize attack surface, delegating swap complexity to verified external routers (Trader Joe).
             </p>
          </div>
        </div>
      </section>

      {/* 10. Resources */}
      <section id="resources" className="mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-8">10. Additional Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="https://github.com/Colombia-Blockchain/SnowRail" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-electric-blue/50 transition-colors group">
            <h4 className="font-bold text-white group-hover:text-electric-blue transition-colors">GitHub Repo</h4>
            <p className="text-xs text-gray-500 mt-1">Source code & examples</p>
          </a>
          <a href="https://testnet.snowtrace.io" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-electric-blue/50 transition-colors group">
            <h4 className="font-bold text-white group-hover:text-electric-blue transition-colors">SnowTrace</h4>
            <p className="text-xs text-gray-500 mt-1">Fuji Testnet Explorer</p>
          </a>
          <a href="https://docs.layer2financial.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-electric-blue/50 transition-colors group">
            <h4 className="font-bold text-white group-hover:text-electric-blue transition-colors">Rail Docs</h4>
            <p className="text-xs text-gray-500 mt-1">Fiat Rail Documentation</p>
          </a>
          <a href="https://github.com/eigensphere/x402" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-electric-blue/50 transition-colors group">
            <h4 className="font-bold text-white group-hover:text-electric-blue transition-colors">x402 Protocol</h4>
            <p className="text-xs text-gray-500 mt-1">Protocol Specifications</p>
          </a>
        </div>
      </section>

    </DocsLayout>
  );
};

export default DocumentationPage;

