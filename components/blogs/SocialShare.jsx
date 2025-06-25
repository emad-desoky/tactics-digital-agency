"use client";

import { useState, useEffect } from "react";
import {
  Share2,
  Instagram,
  Linkedin,
  Facebook,
  LinkIcon,
  Check,
} from "lucide-react";

const SocialShare = ({ title, blogId }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareContent = {
    title: title,
    text: `Check out this article: ${title}`,
    url: currentUrl,
  };

  const shareLinks = {
    instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}&quote=${encodeURIComponent(shareContent.text)}`,
  };

  const handleShare = async (platform) => {
    // Track the share
    try {
      await fetch(`/api/blogs/${blogId}/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ platform }),
      });
    } catch (error) {
      console.error("Error tracking share:", error);
    }

    // Handle platform-specific sharing
    if (platform === "instagram") {
      // For Instagram, we'll copy the content and open Instagram
      if (navigator.share) {
        try {
          await navigator.share(shareContent);
        } catch (error) {
          // Fallback: copy to clipboard and open Instagram
          await navigator.clipboard.writeText(
            `${shareContent.text} ${currentUrl}`
          );
          window.open("https://www.instagram.com/", "_blank");
        }
      } else {
        // Fallback: copy to clipboard and open Instagram
        await navigator.clipboard.writeText(
          `${shareContent.text} ${currentUrl}`
        );
        window.open("https://www.instagram.com/", "_blank");
      }
    } else {
      // For other platforms, use direct links
      window.open(shareLinks[platform], "_blank", "width=600,height=400");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Share2 className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold text-gray-900">
          Share this article
        </h3>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleShare("instagram")}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
        >
          <Instagram className="w-5 h-5 mr-2" />
          Instagram
        </button>

        <button
          onClick={() => handleShare("linkedin")}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </button>

        <button
          onClick={() => handleShare("facebook")}
          className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Facebook
        </button>

        <button
          onClick={copyToClipboard}
          className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-300"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <LinkIcon className="w-5 h-5 mr-2" />
              Copy Link
            </>
          )}
        </button>
      </div>

      <p className="text-sm text-gray-500">
        Help others discover this content by sharing it on your favorite
        platform.
      </p>
    </div>
  );
};

export default SocialShare;
