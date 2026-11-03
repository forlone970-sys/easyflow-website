export interface PromptFlowDownloadConfig {
  productName: string;
  version: string;
  releaseTag: string;
  releaseDate: string;
  architecture: string;
  osCompatibility: string;
  fileSize: string;
  fileSizeBytes: number;
  installerFilename: string;
  installerType: string;
  status: 'pending_release_publication' | 'verified_production' | 'available';
  statusLabel: string;
  statusDescription: string;
  githubRepoUrl: string;
  githubReleaseUrl: string;
  githubAssetDownloadUrl: string;
  isReleasePublished: boolean;
  sha256Checksum?: string;
  analyticsNotes: string;
}

export const promptflowDownloadConfig: PromptFlowDownloadConfig = {
  productName: 'PromptFlow',
  version: '0.1.0',
  releaseTag: 'v0.1.0',
  releaseDate: 'November 2026',
  architecture: 'x64 (64-bit)',
  osCompatibility: 'Windows 10 / Windows 11 (64-bit)',
  fileSize: '5.62 MB',
  fileSizeBytes: 5897478,
  installerFilename: 'PromptFlow_0.1.0_x64-setup.exe',
  installerType: 'NSIS Setup Executable (.exe)',
  status: 'available',
  statusLabel: 'Available for Windows',
  statusDescription:
    'PromptFlow v0.1.0 for Windows is officially released. Download the standalone installer directly from EasyFlow.',
  githubRepoUrl: '',
  githubReleaseUrl: '',
  githubAssetDownloadUrl:
    'https://github.com/forlone970-sys/easyflow-website/releases/download/v0.1.0/PromptFlow_0.1.0_x64-setup.exe',
  isReleasePublished: true,
  sha256Checksum: '7032a956d28322c3b153eecd2249df4208cc97ade3c482cc5bdbf1202684fc0a',
  analyticsNotes:
    'Installer downloads are natively tracked per asset download event. Each download increments the total asset download count without user accounts or tracking cookies.'
};

export const triggerPromptFlowDownload = (): void => {
  if (typeof window === 'undefined') return;
  const link = document.createElement('a');
  link.href = promptflowDownloadConfig.githubAssetDownloadUrl;
  link.setAttribute('download', promptflowDownloadConfig.installerFilename);
  link.setAttribute('rel', 'noopener noreferrer');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    if (document.body.contains(link)) {
      document.body.removeChild(link);
    }
  }, 1000);
};
