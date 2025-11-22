const CheckersPrivacyAlt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy — "Checkers" (iOS) - Alternative Version</h1>
        
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p><strong>Last Updated: 2025-08-14</strong></p>

          <p>This Privacy Policy describes what data the "Checkers" application (hereinafter referred to as the "Application") processes, for what purposes, on what grounds, and how you can manage your data.</p>

          <p>The Application is developed for iOS and distributed through the App Store. By using the Application, you agree to the terms of this Policy.</p>

          <h2>1. What Data We Process</h2>
          <p>The Application strives to operate without collecting users' personal data and does not create a separate developer account. Data processing is limited to the following cases:</p>

          <ul>
            <li><strong>Game Center (by your choice):</strong>
              <ul>
                <li>displayed player name, player ID, avatar — provided by Apple through GameKit upon authorization;</li>
                <li>this data is used for online play (matchmaking), leaderboards, and achievements; it is not transferred to or stored on the developer's own servers.</li>
              </ul>
            </li>
            <li><strong>Online matches via GameKit:</strong>
              <ul>
                <li>technical network data of the match (moves, match state, service messages, connection parameters) is transmitted between devices through Apple's infrastructure (GameKit/Real-Time/Turn-Based);</li>
                <li>the data is used exclusively for the game session and is not stored by the developer outside your device.</li>
              </ul>
            </li>
            <li><strong>Update check:</strong>
              <ul>
                <li>The Application accesses the public iTunes Search API by bundle identifier (bundleId) to check for a new version in the App Store. In doing so, Apple may receive IP address and client information (User-Agent) according to its privacy policy.</li>
              </ul>
            </li>
            <li><strong>Local data on device:</strong>
              <ul>
                <li>settings (interface language, theme);</li>
                <li>game auto-save and/or local game statistics/history (on device);</li>
                <li>this data is stored locally (UserDefaults/Core Data/files) and is not transmitted to the developer.</li>
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
                <li>within the Application — by resetting game auto-save/history (if available);</li>
                <li>completely — by deleting the Application from the device (iOS will delete all local Application data).</li>
              </ul>
            </li>
          </ul>

          <h2>6. Children</h2>
          <p>The Application is not specifically intended for children under 13 years of age (or other age determined by local law). Game Center authorization is governed by Apple's rules and parental controls.</p>

          <h2>7. International Data Transfer</h2>
          <p>Online matches and authorization go through Apple's infrastructure (GameKit). Cross-border data transfer is governed by Apple's policies and Game Center terms of use.</p>

          <h2>8. Policy Changes</h2>
          <p>We may periodically update the Policy. The current version is published as part of the Application and/or on the project page. The effective date is indicated at the top of the document. By continuing to use the Application after the Policy changes, you agree to the updated terms.</p>

          <h2>9. Contact</h2>
          <p>For privacy and user rights questions, contact the developer through the "Developer Support" section on the Application page in the App Store.</p>

          <h2>10. Summary</h2>
          <ul>
            <li>We do not collect personal data for advertising/analytics.</li>
            <li>We only use Game Center/GameKit for online play, leaderboards, and achievements.</li>
            <li>Settings/history — only locally on your device.</li>
            <li>Update check — request to Apple's iTunes Search API.</li>
          </ul>

          <p>If you have any questions — contact us through support on the app page in the App Store.</p>

          <hr />
          <p>This Policy is prepared for user convenience. In case of discrepancies, interpretation is made in favor of stricter protection of user rights within applicable law and Apple's rules.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckersPrivacyAlt;