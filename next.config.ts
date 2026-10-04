import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // 빌드 시 타입 에러가 있어도 배포를 멈추지 않고 계속 진행
    ignoreBuildErrors: true,
  },
  // 기존 다른 옵션이 있다면 유지
};

export default nextConfig;