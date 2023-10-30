// header.tsx
"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; // これで左端にコンテンツが揃います
  padding: 1rem;
  background-color: #f7f7f7;
  position: fixed; // この行を追加
  top: 0; // この行を追加
  left: 0; // この行を追加
  right: 0; // この行を追加
  z-index: 1000; // 必要に応じてz-indexを高くして他の要素よりも上に表示
`;

const Logo = styled.div`
  position: relative; // Next.jsのImageを正しく動作させるために必要
  width: 100px;
  height: 50px;
  flex-shrink: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-left: 1rem; // ロゴとの間にスペースを追加

  a {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    color: black;  
    &:hover {
      color: red;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <Image
          src="/logo.png"
          alt="MyApp Logo"
          layout="fill"
          objectFit="contain"
        />
      </Logo>
      <Nav>
      
        <a href="/">Home</a>
        <Link href={`/mypage`} passHref>mypage</Link>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
