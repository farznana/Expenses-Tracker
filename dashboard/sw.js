self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong untuk sementara, ini cuma nak bagi dia "aktif"
});