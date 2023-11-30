const users = [];

// Tambah Pengguna
const tambahPengguna = ({ id, username, room }) => {
  // Bersihkan data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

  // Validasi data
    if (!username || !room) {
        return { error: 'Username dan room dibutuhkan!' };
    }

  // Periksa keberadaan pengguna
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    });

  // Validasi username
    if (existingUser) {
        return { error: 'Username sudah digunakan!' };
    }

  // Simpan pengguna
    const user = { id, username, room };
    users.push(user);

    return { user };
};

// Hapus Pengguna
const hapusPengguna = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
    return users.splice(index, 1)[0];
    }
};

// Ambil Pengguna
const ambilPengguna = (id) => {
    return users.find((user) => user.id === id);
};

// Ambil Pengguna Dari Room
const ambilPenggunaDariRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
};

module.exports = {
    tambahPengguna,
    hapusPengguna,
    ambilPengguna,
    ambilPenggunaDariRoom
};
