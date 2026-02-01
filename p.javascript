// Eski hatalı mantık: Sadece Y eksenine bakıyordu
// moveData.forward = data.vector.y;

// Yeni GTA Mantığı: Güç varsa yürü, açıyı kameraya göre ayarla
if (data.force > 0.1) {
    moveData.active = true;
    moveData.angle = data.angle.radian; // Joystick açısı
}
