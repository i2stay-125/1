#!/usr/bin/env python3
"""
Convert GIF to MP4 video format for better performance
"""
import subprocess
import os
from pathlib import Path

def convert_gif_to_mp4():
    gif_path = Path(__file__).parent / "public" / "images" / "hero-bg-001.gif"
    mp4_path = Path(__file__).parent / "public" / "videos" / "hero-bg-001.mp4"
    webm_path = Path(__file__).parent / "public" / "videos" / "hero-bg-001.webm"
    
    # Create videos directory if it doesn't exist
    mp4_path.parent.mkdir(parents=True, exist_ok=True)
    
    if not gif_path.exists():
        print(f"❌ GIF file not found: {gif_path}")
        return False
    
    print(f"📹 Converting GIF to MP4...")
    print(f"Input: {gif_path} ({gif_path.stat().st_size / (1024**2):.1f} MB)")
    
    try:
        # Convert to MP4 (H.264 codec)
        print(f"\n⏳ Converting to MP4 (this may take a few minutes)...")
        subprocess.run([
            "ffmpeg",
            "-i", str(gif_path),
            "-c:v", "libx264",
            "-preset", "slow",
            "-crf", "22",
            "-pix_fmt", "yuv420p",
            "-movflags", "+faststart",
            str(mp4_path)
        ], check=True, capture_output=True)
        
        mp4_size = mp4_path.stat().st_size / (1024**2)
        print(f"✅ MP4 created: {mp4_path} ({mp4_size:.1f} MB)")
        
        # Convert to WebM (VP9 codec) for better compression
        print(f"\n⏳ Converting to WebM (this may take a few minutes)...")
        subprocess.run([
            "ffmpeg",
            "-i", str(gif_path),
            "-c:v", "libvpx-vp9",
            "-b:v", "0",
            "-crf", "30",
            str(webm_path)
        ], check=True, capture_output=True)
        
        webm_size = webm_path.stat().st_size / (1024**2)
        print(f"✅ WebM created: {webm_path} ({webm_size:.1f} MB)")
        
        gif_size = gif_path.stat().st_size / (1024**2)
        print(f"\n📊 File size comparison:")
        print(f"   Original GIF: {gif_size:.1f} MB")
        print(f"   MP4 (H.264):  {mp4_size:.1f} MB ({mp4_size/gif_size*100:.1f}%)")
        print(f"   WebM (VP9):   {webm_size:.1f} MB ({webm_size/gif_size*100:.1f}%)")
        print(f"\n✨ Conversion complete! You can now use MP4/WebM in your React component.")
        
        return True
        
    except FileNotFoundError:
        print("❌ FFmpeg not found. Please install FFmpeg:")
        print("   Windows: choco install ffmpeg")
        print("   macOS: brew install ffmpeg")
        print("   Linux: sudo apt-get install ffmpeg")
        return False
    except subprocess.CalledProcessError as e:
        print(f"❌ Conversion failed: {e}")
        return False

if __name__ == "__main__":
    convert_gif_to_mp4()
