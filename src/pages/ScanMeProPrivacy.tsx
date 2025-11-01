const ScanMeProPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy - Scan2Convert</h1>
        
        {/* English Version */}
        <section className="mb-16 prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY</h2>

          <p>
            Scan2Convert ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your information when you use our mobile application 
            Scan2Convert (the "App").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">1. Information You Provide</h4>
          <ul>
            <li><strong>Documents and Images:</strong> When you scan documents or import images, these files are stored locally on your device</li>
            <li><strong>Signatures:</strong> Digital signatures you create are stored locally on your device</li>
            <li><strong>User Preferences:</strong> App settings and preferences (language, scan quality, theme)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">2. Automatically Collected Information</h4>
          <ul>
            <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers</li>
            <li><strong>Usage Data:</strong> App features used, crash reports, performance data</li>
            <li><strong>iCloud Data:</strong> If you enable iCloud sync, your documents are stored in your personal iCloud account</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide core scanning and document management functionality</li>
            <li>Sync your documents across your devices via iCloud (if enabled)</li>
            <li>Improve app performance and fix bugs</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Provide customer support</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage and Security</h3>

          <h4 className="text-lg font-semibold mt-4 mb-2">Local Storage:</h4>
          <ul>
            <li>All documents, scans, and signatures are stored locally on your device</li>
            <li>Secure Vault documents are encrypted using AES-256 encryption</li>
            <li>PIN codes and biometric data are stored in iOS Keychain</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">iCloud Storage:</h4>
          <ul>
            <li>When iCloud sync is enabled, documents are stored in your personal iCloud account</li>
            <li>We do not have access to your iCloud data</li>
            <li>Apple's privacy policy applies to iCloud storage</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Security Measures:</h4>
          <ul>
            <li>End-to-end encryption for Secure Vault documents</li>
            <li>Biometric authentication (Face ID/Touch ID) support</li>
            <li>No third-party access to your documents</li>
            <li>No cloud storage on our servers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Sharing</h3>
          
          <p className="font-semibold">We DO NOT:</p>
          <ul>
            <li>Sell your personal information to third parties</li>
            <li>Share your documents with any external services</li>
            <li>Upload your data to our servers (except iCloud sync)</li>
            <li>Use your documents for training AI models</li>
            <li>Track your location</li>
          </ul>

          <p className="font-semibold mt-4">We MAY share information only in these limited cases:</p>
          <ul>
            <li>When required by law or legal process</li>
            <li>To protect our rights or the safety of users</li>
            <li>With your explicit consent</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Services</h3>
          <p>The App uses the following Apple services:</p>
          <ul>
            <li><strong>iCloud:</strong> For optional document synchronization (controlled by you)</li>
            <li><strong>App Store:</strong> For app distribution and updates</li>
            <li><strong>Apple Vision Framework:</strong> For on-device OCR processing</li>
          </ul>
          <p>These services are governed by Apple's Privacy Policy.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access all your data (stored locally on your device)</li>
            <li>Delete your data at any time by deleting the app</li>
            <li>Disable iCloud sync in app settings</li>
            <li>Export your documents in standard formats (PDF, images)</li>
            <li>Contact us with privacy-related questions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            updating the "Last Updated" date at the top of this policy.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Key Points</h3>
          <ul>
            <li>✅ No data collection on external servers - all data stays on your device</li>
            <li>✅ Optional iCloud sync - you control it</li>
            <li>✅ AES-256 encryption for Secure Vault</li>
            <li>✅ No third-party sharing of your documents</li>
            <li>✅ No tracking or analytics that identify you personally</li>
            <li>✅ Full data control - delete anytime by removing the app</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
          <p><strong>Email:</strong> spiro.boris@yandex.ru</p>
        </section>
      </div>
    </div>
  );
};

export default ScanMeProPrivacy;
