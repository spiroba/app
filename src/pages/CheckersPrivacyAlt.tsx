const CheckersPrivacyAlt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy &amp; Terms of Use — "Checkers" (iOS)</h1>
        
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p><strong>Last Updated: 2025-11-23</strong></p>

          <p>This document describes the Privacy Policy and Terms of Use for the "Checkers" application (hereinafter referred to as the "Application"). The Application is developed for iOS and distributed through the App Store. By using the Application, you agree to the terms of this document.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">PART 1: PRIVACY POLICY</h2>

          <h2>1. What Data We Process</h2>
          <p>The Application strives to operate without collecting users' personal data and does not create a separate developer account. Data processing is limited to the following cases:</p>

          <ul>
            <li><strong>Game Center (by your choice):</strong>
              <ul>
                <li>Displayed player name, player ID, avatar — provided by Apple through GameKit upon authorization;</li>
                <li>This data is used for online play (matchmaking), leaderboards, and achievements; it is not transferred to or stored on the developer's own servers.</li>
              </ul>
            </li>
            <li><strong>Online matches via GameKit:</strong>
              <ul>
                <li>Technical network data of the match (moves, match state, service messages, connection parameters) is transmitted between devices through Apple's infrastructure (GameKit/Real-Time/Turn-Based);</li>
                <li>The data is used exclusively for the game session and is not stored by the developer outside your device.</li>
              </ul>
            </li>
            <li><strong>Update check:</strong>
              <ul>
                <li>The Application accesses the public iTunes Search API by bundle identifier (bundleId) to check for a new version in the App Store. In doing so, Apple may receive IP address and client information (User-Agent) according to its privacy policy.</li>
              </ul>
            </li>
            <li><strong>Local data on device:</strong>
              <ul>
                <li>Settings (interface language, theme);</li>
                <li>Game auto-save and/or local game statistics/history (on device);</li>
                <li>This data is stored locally (UserDefaults/Core Data/files) and is not transmitted to the developer.</li>
              </ul>
            </li>
          </ul>

          <p>We <strong>do not use</strong> third-party analytics SDKs, advertising identifiers, geolocation, camera, contacts, microphone, photo/media library, etc.</p>

          <h2>2. Legal Bases and Processing Purposes</h2>
          <ul>
            <li><strong>Application functionality:</strong> single and online matches through Game Center, saving settings and auto-saves.</li>
            <li><strong>Compatibility and relevance:</strong> one-time network requests to iTunes Search API to check for Application updates.</li>
          </ul>

          <h2>3. Transfer to Third Parties</h2>
          <ul>
            <li><strong>Apple Game Center</strong> and related GameKit services process game and network data according to Apple's policy. The developer does not have access to your Apple ID credentials.</li>
            <li>The developer <strong>does not transfer</strong> your personal data to third parties for marketing or advertising purposes.</li>
          </ul>

          <h2>4. Storage and Security</h2>
          <ul>
            <li>Settings, auto-saves, and game history are stored <strong>locally</strong> on the user's device.</li>
            <li>The Application <strong>does not have</strong> a developer server database where user data would be transferred.</li>
            <li>Network interaction security is provided by iOS and GameKit mechanisms.</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>Depending on applicable law (e.g., GDPR/CCPA), you may have rights to access, correct, restrict processing, and delete data. Considering that the Application does not store your personal data with the developer:</p>
          <ul>
            <li>Game Center data is managed through your Apple ID account (iOS Settings → Game Center). Deleting/changing Game Center profile is done through Apple.</li>
            <li>Local data (settings, auto-saves, history) can be deleted:
              <ul>
                <li>Within the Application — by resetting game auto-save/history (if available);</li>
                <li>Completely — by deleting the Application from the device (iOS will delete all local Application data).</li>
              </ul>
            </li>
          </ul>

          <h2>6. Children</h2>
          <p>The Application is not specifically intended for children under 13 years of age (or other age determined by local law). Game Center authorization is governed by Apple's rules and parental controls.</p>

          <h2>7. International Data Transfer</h2>
          <p>Online matches and authorization go through Apple's infrastructure (GameKit). Cross-border data transfer is governed by Apple's policies and Game Center terms of use.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">PART 2: TERMS OF USE</h2>

          <h2>8. Subscription Plans</h2>
          <p>The Application offers the following premium subscription options:</p>
          <ul>
            <li><strong>Monthly Premium:</strong>
              <ul>
                <li>Auto-renewing subscription billed monthly</li>
                <li>Provides unlimited access to all game features</li>
              </ul>
            </li>
            <li><strong>Yearly Premium:</strong>
              <ul>
                <li>Auto-renewing subscription billed annually</li>
                <li>Includes discount compared to monthly subscription</li>
                <li>Provides unlimited access to all game features</li>
              </ul>
            </li>
          </ul>

          <h2>9. Payment and Renewal</h2>
          <ul>
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>Subscription automatically renews unless cancelled at least 24 hours before the end of the current period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period at the same price.</li>
            <li>Prices are displayed in your local currency and may vary by region.</li>
          </ul>

          <h2>10. Managing and Cancelling Subscriptions</h2>
          <ul>
            <li>You can manage and cancel your subscription at any time through your App Store account settings (Settings → Apple ID → Subscriptions).</li>
            <li>Cancellation takes effect at the end of the current billing period.</li>
            <li>No refund is provided for the unused portion of the subscription term.</li>
          </ul>

          <h2>11. Refunds</h2>
          <ul>
            <li>All refund requests are handled by Apple according to App Store policies.</li>
            <li>To request a refund, contact Apple Support at <a href="https://reportaproblem.apple.com" className="text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">https://reportaproblem.apple.com</a></li>
          </ul>

          <h2>12. Free Trial</h2>
          <ul>
            <li>If a free trial is offered, it will automatically convert to a paid subscription at the end of the trial period unless cancelled at least 24 hours before the trial ends.</li>
            <li>Any unused portion of a free trial will be forfeited upon purchasing a subscription.</li>
          </ul>

          <h2>13. Prohibited Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use cheats, exploits, automation software, bots, hacks, or any unauthorized third-party software;</li>
            <li>Reverse engineer, decompile, or disassemble the Application;</li>
            <li>Modify, adapt, or create derivative works based on the Application;</li>
            <li>Use the Application for any illegal or unauthorized purpose;</li>
            <li>Interfere with or disrupt the integrity or performance of the Application;</li>
            <li>Attempt to gain unauthorized access to any portion of the Application.</li>
          </ul>

          <h2>14. Disclaimer of Warranties</h2>
          <p>The Application is provided "as is" and "as available" without warranties of any kind, either express or implied. The developer does not warrant that the Application will be uninterrupted, error-free, or free of harmful components.</p>

          <h2>15. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Application.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">PART 3: GENERAL PROVISIONS</h2>

          <h2>16. Policy Changes</h2>
          <p>We may periodically update this document. The current version is published as part of the Application and/or on the project page. The effective date is indicated at the top of the document. By continuing to use the Application after changes, you agree to the updated terms.</p>

          <h2>17. Contact</h2>
          <p>For privacy, user rights, or subscription questions, contact the developer:</p>
          <ul>
            <li>Email: <a href="mailto:spiro.boris@yandex.ru" className="text-accent hover:text-accent/80">spiro.boris@yandex.ru</a></li>
            <li>Through the "Developer Support" section on the Application page in the App Store</li>
          </ul>

          <h2>18. Summary</h2>
          <ul>
            <li>We do not collect personal data for advertising/analytics.</li>
            <li>We only use Game Center/GameKit for online play, leaderboards, and achievements.</li>
            <li>Settings/history — only locally on your device.</li>
            <li>Update check — request to Apple's iTunes Search API.</li>
            <li>Subscriptions are managed through Apple and auto-renew unless cancelled.</li>
          </ul>

          <p>If you have any questions — contact us through support on the app page in the App Store.</p>

          <hr />
          <p>This document is prepared for user convenience. In case of discrepancies, interpretation is made in favor of stricter protection of user rights within applicable law and Apple's rules.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckersPrivacyAlt;