module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Fitur baru atau fungsionalitas
        'fix', // Memperbaiki bug
        'docs', // Perubahan dokumentasi
        'chore', // Tugas pemeliharaan umum (misalnya, memperbarui dependensi)
        'style', // Perubahan yang tidak mempengaruhi kode (misalnya, pemformatan)
        'refactor', // Perubahan kode yang tidak memperbaiki bug atau menambah fitur
        'ci', // Perubahan pada konfigurasi atau skrip integrasi berkelanjutan
        'test', // Menambah atau memodifikasi pengujian
        'revert', // Mengembalikan commit sebelumnya
        'perf', // Peningkatan performa
        'vercel', // Perubahan terkait dengan deployment Vercel (tipe khusus untuk kasus tertentu)
      ],
    ],
  },
};
