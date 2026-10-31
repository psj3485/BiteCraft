/**
 * BiteCraft - AI Dining Assistant & Gourmet Concierge ("Chef BiteCraft AI")
 * Client-Side Autonomous NLP & Food Recommendation Engine
 */

class ChefBiteCraftAI {
  constructor() {
    this.name = "Chef BiteCraft AI";
    this.title = "Executive AI Culinary Concierge";
  }

  generateResponse(query) {
    const q = (query || '').trim().toLowerCase();

    // 1. GREETINGS & INTRODUCTIONS
    if (this.matchesAny(q, ['hi', 'hello', 'hey', 'bonjour', 'namaste', 'greetings', 'who are you', 'what are you', 'help me', 'start'])) {
      return {
        text: "Bonjour! 👨‍🍳 I'm **Chef BiteCraft AI**, your dedicated culinary AI concierge. Whether you're craving something richly indulgent, exploring our **16 artisanal pure vegetarian creations**, or tracking your order, I'm here to elevate your dining journey.\n\nWhat tantalizing flavors are you in the mood to savor today?",
        chips: ['🍔 Best Burgers', '🍕 Artisan Pizzas', '🌱 Pure Veg', '🔥 Spicy & Cheesy', '🚀 Track Order'],
        recommendations: [1, 2, 13, 17]
      };
    }

    // 2. SPICY & CHEESY COMBINATION CRAVINGS
    if ((q.includes('spicy') || q.includes('hot') || q.includes('peri')) && (q.includes('chees') || q.includes('cheese'))) {
      return {
        text: "The ultimate culinary alchemy of fiery spice and molten silk! 🔥🧀 I recommend pairing bold chili heat with melted artisanal cheeses:",
        recommendations: [3, 1, 19, 17],
        chips: ['🍔 Truffle Burger', '🍕 Burrata Pizza', '🍗 Peri-Peri Wings', '🛒 View Cart']
      };
    }

    // 3. SPICY CRAVINGS
    if (this.matchesAny(q, ['spicy', 'hot', 'fiery', 'peri peri', 'peri-peri', 'chili', 'chilli', 'flaming', 'kick', 'wings'])) {
      return {
        text: "Looking for an exhilarating gourmet kick? 🔥 Our kitchen crafts bold, layered heat profiles without sacrificing nuanced flavor:",
        recommendations: [3, 18, 6],
        chips: ['🍗 Crispy Peri-Peri Wings', '🍣 Spicy Avocado Roll', '🌯 Cali Burrito', '🌱 Pure Veg Options']
      };
    }

    // 4. CHEESY CRAVINGS
    if (this.matchesAny(q, ['cheesy', 'cheese', 'melted', 'gouda', 'burrata', 'mozzarella', 'parmesan', 'cheddar', 'queso'])) {
      return {
        text: "Indulge in pure molten bliss! 🧀 Here are our most beloved chef creations featuring aged English cheddar, hand-pulled Pugliese burrata, and buffalo mozzarella:",
        recommendations: [17, 2, 1, 19],
        chips: ['🍕 Burrata Pesto Pizza', '🍕 Margherita Pizza', '🍔 Truffle Smash Burger', '🛒 View Cart']
      };
    }

    // 5. BURGER CRAVINGS
    if (this.matchesAny(q, ['burger', 'burgers', 'smash burger', 'bun', 'patty'])) {
      return {
        text: "Crafted on golden artisanal toasted brioche with signature house aioli! 🍔 Here are our two crown-jewel burgers (one beef, one herbed vegetarian):",
        recommendations: [1, 13],
        chips: ['🍔 Truffle Smash Burger', '🥑 Portobello Avocado Burger', '🍟 Truffle Fries', '🌱 Pure Veg']
      };
    }

    // 6. PIZZA CRAVINGS
    if (this.matchesAny(q, ['pizza', 'pizzas', 'slice', 'margherita', 'crust', 'pesto pizza'])) {
      return {
        text: "Slow-fermented Neapolitan dough baked at 800°F with San Marzano tomatoes! 🍕 Behold our signature artisanal pies:",
        recommendations: [2, 17],
        chips: ['🍕 Margherita Pizza', '🍕 Burrata Pesto Pizza', '🍝 Creamy Fettuccine', '🛒 View Cart']
      };
    }

    // 7. PURE VEGETARIAN DELICACIES
    if (this.matchesAny(q, ['veg', 'vegetarian', 'pure veg', 'shakahari', 'veggie', 'green'])) {
      return {
        text: "🌱 **100% Pure Vegetarian Excellence!** BiteCraft proudly curates **16 artisanal vegetarian masterworks**, crafted in dedicated prep stations. Here are our top customer favorites:",
        recommendations: [13, 15, 16, 17],
        chips: ['🥑 Portobello Burger', '🥟 Edamame Dim Sum', '🍛 Paneer Makhani Bowl', '🍕 Burrata Pizza', '🌱 Filter Menu to Veg']
      };
    }

    // 8. VEGAN & PLANT-BASED
    if (this.matchesAny(q, ['vegan', 'plant based', 'dairy free', 'dairy-free', 'plant-based'])) {
      return {
        text: "🌱 **100% Plant-Based & Dairy-Free Selections**: We take conscious dining to fine-dining standards. These options feature zero animal or dairy products:",
        recommendations: [18, 16, 11],
        chips: ['🍣 Avocado Sushi Roll', '🥟 Truffle Dim Sum', '🍵 Ceremonial Matcha', '🌱 All Pure Veg']
      };
    }

    // 9. HEALTHY / KETO / PROTEIN / SALMON / WELLNESS
    if (this.matchesAny(q, ['healthy', 'diet', 'salmon', 'protein', 'low carb', 'keto', 'light', 'salad', 'clean', 'fitness', 'quinoa'])) {
      return {
        text: "Nutrient-dense, clean, and extraordinary in flavor! 🥗 Here are our supreme wellness creations packed with wholesome proteins and organic greens:",
        recommendations: [5, 20, 11],
        chips: ['🐟 Pan-Seared Salmon Bowl', '🥗 Halloumi Quinoa Bowl', '🍵 Matcha Latte', '🛒 View Cart']
      };
    }

    // 10. PASTA & RISOTTO / ITALIAN
    if (this.matchesAny(q, ['pasta', 'fettuccine', 'risotto', 'italian', 'noodles', 'arborio', 'cream'])) {
      return {
        text: "Velvety comfort straight from our Italian brigade! 🍝 Egg fettuccine in garlic-parmesan cream and slow-simmered forest mushroom risotto:",
        recommendations: [4, 14],
        chips: ['🍝 Tuscan Fettuccine', '🍄 Forest Mushroom Risotto', '🧀 Truffle Fries', '🛒 View Cart']
      };
    }

    // 11. DESSERTS & SWEET CRAVINGS
    if (this.matchesAny(q, ['dessert', 'desserts', 'sweet', 'chocolate', 'cake', 'lava cake', 'cheesecake', 'sugar'])) {
      return {
        text: "Pure sweet decadence handcrafted by our pastry brigade! 🍰 Molten Belgian chocolate truffles and rich New York cream cheese:",
        recommendations: [9, 10],
        chips: ['🍫 Molten Lava Cake', '🍰 Berry Cheesecake', '☕ Cold Brew Foam', '🛒 View Cart']
      };
    }

    // 12. DRINKS & REFRESHMENTS
    if (this.matchesAny(q, ['drink', 'drinks', 'beverage', 'beverages', 'coffee', 'cold brew', 'mojito', 'latte', 'refreshing', 'mocktail'])) {
      return {
        text: "Artisanal sips designed to complement every bite! 🍸 Slow-steeped cold brew with vanilla sweet foam and fizzy garden strawberry mojitos:",
        recommendations: [7, 8, 11],
        chips: ['☕ Cold Brew Vanilla Foam', '🍓 Strawberry Mojito', '🍵 Ceremonial Matcha Latte', '🛒 View Cart']
      };
    }

    // 13. ALLERGENS & INGREDIENT INQUIRIES
    if (this.matchesAny(q, ['allergen', 'allergens', 'allergy', 'nuts', 'gluten', 'peanut', 'egg', 'dairy', 'ingredients'])) {
      return {
        text: "🛡️ **Culinary Allergen & Dietary Standards**:\n• **Pure Veg items**: Prepared in separated veg-only stations with green markers.\n• **Gluten-Sensitive**: Try our Pan-Seared Salmon Bowl & Edamame Dim Sum.\n• **Custom Requirements**: You can specify exact allergen notes in the **Special Instructions** field at checkout! Our executive chef personally reviews every order note.",
        chips: ['🌱 Pure Veg Options', '🍵 Matcha Latte (Dairy-Free)', '🐟 Salmon Bowl', '🛒 View Cart']
      };
    }

    // 14. ORDER TRACKING & LIVE STATUS
    if (this.matchesAny(q, ['track', 'tracking', 'status', 'where is my order', 'my order', 'dispatch', 'delivery status'])) {
      if (typeof currentUser !== 'undefined' && currentUser) {
        return {
          text: `📦 **Live Order Tracking for @${currentUser.username}**:\n\nOur kitchen brigade is currently preparing fresh orders with express thermal insulation. Standard prep & dispatch time is **25-35 minutes**.\n\nClick below to view your verified order status and receipts:`,
          action: { type: 'open_orders', label: '📋 View My Personal Orders' },
          chips: ['📋 View My Orders', '⚡ Delivery Speed', '🍔 Explore Menu', '🛒 View Cart']
        };
      } else {
        return {
          text: "📦 **Order Tracking**:\nTo view live orders placed under your account, please sign in. All BiteCraft orders are dispatched in temperature-controlled thermal containers within **25-35 minutes**!",
          action: { type: 'open_auth', label: '🔑 Sign In to Track Orders' },
          chips: ['🔑 Sign In Now', '⚡ Delivery Speed', '🍔 Explore Menu', '🛒 View Cart']
        };
      }
    }

    // 15. CART & BILL INQUIRIES
    if (this.matchesAny(q, ['cart', 'basket', 'my cart', 'total', 'bill', 'subtotal', 'items in cart'])) {
      const cartKeys = (typeof cart !== 'undefined') ? Object.keys(cart) : [];
      let totalQty = 0;
      let subtotal = 0;
      cartKeys.forEach(id => {
        const qty = cart[id];
        const item = (typeof menuItems !== 'undefined') ? menuItems.find(m => m.id == id) : null;
        if (item && qty > 0) {
          totalQty += qty;
          subtotal += item.price * qty;
        }
      });

      if (totalQty === 0) {
        return {
          text: "🛒 **Your cart is currently empty!**\n\nLet me recommend some of our culinary brigade's signature masterworks to start your gourmet experience:",
          recommendations: [1, 2, 13, 17],
          chips: ['🍔 Best Burgers', '🍕 Artisan Pizzas', '🌱 Pure Veg', '🛒 Open Cart']
        };
      } else {
        const neededForFree = Math.max(0, 199.00 - subtotal);
        let freeMsg = neededForFree === 0
          ? "🎉 **100% FREE Express Delivery Unlocked!**"
          : `💡 Add ₹${neededForFree.toFixed(2)} more to unlock **FREE Delivery**!`;
        return {
          text: `🛒 **Current Order Summary**:\n• **${totalQty} gourmet item${totalQty > 1 ? 's' : ''}** in cart\n• Estimated Subtotal: **₹${subtotal.toFixed(2)}**\n• ${freeMsg}\n\nReady to feast? You can view your cart or proceed directly to checkout:`,
          action: { type: 'open_cart', label: '🛒 Open Cart Drawer' },
          chips: ['🛒 Open Cart Drawer', '🚀 Proceed to Checkout', '🌱 Pure Veg Options', '🍰 Add Dessert']
        };
      }
    }

    // 16. CHECKOUT & HOW TO PAY
    if (this.matchesAny(q, ['checkout', 'pay', 'payment', 'how to pay', 'cod', 'upi', 'card', 'place order'])) {
      return {
        text: "💳 **Flexible & Secure Payment Options**:\n• **Cash on Delivery (COD)**: Handled contact-free upon arrival\n• **UPI / Instant**: GPay, PhonePe, Paytm, BHIM\n• **Credit / Debit Cards**: Visa, Mastercard, RuPay, Amex\n\nOrders over ₹199 qualify for **FREE express delivery**!",
        action: { type: 'open_checkout', label: '🚀 Open Checkout Modal' },
        chips: ['🚀 Open Checkout Modal', '🛒 View Cart', '⚡ Delivery Speed', '🌱 Explore Menu']
      };
    }

    // 17. DELIVERY SPEED & HOURS
    if (this.matchesAny(q, ['delivery time', 'speed', 'fast', 'how long', 'minutes', 'hours', 'timing', 'open', 'delivery fee'])) {
      return {
        text: "⚡ **BiteCraft Gourmet Delivery Guarantee**:\n• ⏱️ **Delivery Speed**: 25-35 minutes hyper-local hot delivery\n• 📦 **Thermal Packaging**: Multi-layer insulated pods preserve crispiness & warmth\n• 🎁 **Delivery Fee**: 100% FREE on orders of ₹199 or more (₹29 flat otherwise)\n• 🕒 **Kitchen Hours**: 11:00 AM – 11:30 PM, 7 days a week!",
        chips: ['🍔 Truffle Smash Burger', '🍕 Burrata Pesto Pizza', '🛒 View Cart', '📋 Track Order']
      };
    }

    // 18. DYNAMIC MENU ITEM LOOKUP
    if (typeof menuItems !== 'undefined' && menuItems.length > 0) {
      const matched = menuItems.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(q) || q.includes(item.name.toLowerCase());
        const descMatch = item.description.toLowerCase().includes(q);
        return nameMatch || descMatch;
      });

      if (matched.length > 0) {
        return {
          text: `I found **${matched.length} exceptional creation${matched.length > 1 ? 's' : ''}** matching your inquiry from our kitchen:`,
          recommendations: matched.slice(0, 3).map(m => m.id),
          chips: ['🛒 View Cart', '🌱 Pure Veg Delicacies', '🍰 Add Dessert', '⚡ Delivery Speed']
        };
      }
    }

    // 19. DEFAULT FALLBACK
    return {
      text: "Every dish at BiteCraft is hand-crafted with five-star artisanal passion! 👨‍🍳 Here are our culinary brigade's highest-acclaimed creations to satisfy your appetite:",
      recommendations: [1, 13, 17, 9],
      chips: ['🍔 Best Burgers', '🍕 Artisan Pizzas', '🌱 Pure Veg', '🔥 Spicy & Cheesy', '🛒 View Cart']
    };
  }

  matchesAny(text, keywords) {
    return keywords.some(k => text.includes(k));
  }
}

// Global Chatbot Instance & UI State
const chefAI = new ChefBiteCraftAI();
let isAIChatOpen = false;
let isAITyping = false;
let aiChatInitialized = false;

function toggleAIChat(forceState) {
  const windowEl = document.getElementById('aiChatWindow');
  const unreadDot = document.getElementById('aiChatUnreadDot');
  const teaserEl = document.getElementById('aiChatTeaser');

  if (typeof forceState === 'boolean') {
    isAIChatOpen = forceState;
  } else {
    isAIChatOpen = !isAIChatOpen;
  }

  if (isAIChatOpen) {
    windowEl.classList.add('open');
    windowEl.setAttribute('aria-hidden', 'false');
    if (unreadDot) unreadDot.style.opacity = '0';
    if (teaserEl) teaserEl.classList.remove('show');

    if (window.innerWidth > 640) {
      setTimeout(() => {
        const input = document.getElementById('aiChatInput');
        if (input) input.focus();
      }, 200);
    }

    if (!aiChatInitialized) {
      initAIChatConversation();
    }
  } else {
    windowEl.classList.remove('open');
    windowEl.setAttribute('aria-hidden', 'true');
  }
}

function dismissAITeaser() {
  const teaserEl = document.getElementById('aiChatTeaser');
  if (teaserEl) teaserEl.classList.remove('show');
  sessionStorage.setItem('bitecraft_teaser_dismissed', 'true');
}

function initAIChatConversation() {
  aiChatInitialized = true;
  const initialResponse = chefAI.generateResponse('start');
  renderBotMessage(initialResponse.text, initialResponse.recommendations, initialResponse.action);
  renderChatChips(initialResponse.chips);
}

function resetAIChat() {
  const messagesContainer = document.getElementById('aiChatMessages');
  if (messagesContainer) messagesContainer.innerHTML = '';
  initAIChatConversation();
}

function formatChatMessageText(text) {
  if (!text) return '';
  return text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/• /g, '&bull; ');
}

function renderUserMessage(text) {
  const messagesContainer = document.getElementById('aiChatMessages');
  if (!messagesContainer) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const row = document.createElement('div');
  row.className = 'ai-msg-row user';
  row.innerHTML = `
    <div class="ai-msg-bubble">
      <div>${escapeHTML(text)}</div>
      <div class="ai-msg-time">${timeStr}</div>
    </div>
  `;
  messagesContainer.appendChild(row);
  scrollChatToBottom();
}

function renderBotMessage(text, recommendations, action) {
  const messagesContainer = document.getElementById('aiChatMessages');
  if (!messagesContainer) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const row = document.createElement('div');
  row.className = 'ai-msg-row bot';

  let innerHTML = `
    <div class="ai-msg-mini-avatar">
      <svg class="chef-bot-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="chef-bot-group">
          <path class="chef-hat-outline" d="M7 12.5C5 12.5 3.5 10.8 3.5 8.8C3.5 7 4.7 5.5 6.4 5.1C7 3 9 1.5 11.4 1.5C12.8 1.5 14 2.1 14.8 3C15.6 2.1 16.8 1.5 18.2 1.5C20.6 1.5 22.6 3 23.2 5.1C24.9 5.5 26.1 7 26.1 8.8C26.1 10.8 24.6 12.5 22.6 12.5H7Z" fill="rgba(0, 255, 136, 0.16)" stroke="#00ff88" stroke-width="1.5" stroke-linejoin="round"/>
          <g class="chef-hat-waves">
            <path class="chef-hat-wave wave-1" d="M9.5 11.5C9.5 9.5 10.5 8 10 6" stroke="#00ff88" stroke-width="1.4" stroke-linecap="round"/>
            <path class="chef-hat-wave wave-2" d="M14.8 11.5C14.8 9 15.4 7.2 14.8 4.2" stroke="#00ff88" stroke-width="1.5" stroke-linecap="round"/>
            <path class="chef-hat-wave wave-3" d="M20.1 11.5C20.1 9.5 19.1 8 19.6 6" stroke="#00ff88" stroke-width="1.4" stroke-linecap="round"/>
          </g>
          <rect class="chef-hat-band" x="6" y="12.5" width="17.6" height="1.8" rx="0.9" fill="#00ff88" opacity="0.9"/>
          <rect class="chef-bot-visor" x="5" y="15" width="19.6" height="10" rx="3.5" fill="rgba(5, 14, 9, 0.92)" stroke="#00ff88" stroke-width="1.5"/>
          <g class="chef-eyes-wrap">
            <circle class="chef-eye-dot eye-left" cx="10.5" cy="20" r="1.6" fill="#00ff88"/>
            <circle class="chef-eye-dot eye-right" cx="19.1" cy="20" r="1.6" fill="#00ff88"/>
          </g>
          <path class="chef-smile" d="M13 22.8C13.8 23.5 15.8 23.5 16.6 22.8" stroke="#00ff88" stroke-width="1.3" stroke-linecap="round"/>
        </g>
      </svg>
    </div>
    <div class="ai-msg-bubble">
      <div>${formatChatMessageText(text)}</div>
  `;

  if (recommendations && recommendations.length > 0 && typeof menuItems !== 'undefined') {
    innerHTML += '<div class="chat-food-list">';
    recommendations.forEach(itemId => {
      const item = menuItems.find(m => m.id == itemId);
      if (item) {
        const isVeg = typeof isItemVegetarian === 'function' ? isItemVegetarian(item) : true;
        const vegIcon = isVeg 
          ? '<span class="veg-indicator" title="Pure Veg" style="transform: scale(0.8);"><span class="dot"></span></span>' 
          : '<span class="nonveg-indicator" title="Non-Veg" style="transform: scale(0.8);"><span class="dot"></span></span>';

        innerHTML += `
          <div class="chat-food-item">
            <img src="${item.imageUrl}" class="chat-food-img" alt="${escapeHTML(item.name)}" onclick="scrollToDishInMenu(${item.id})" title="View dish in menu">
            <div class="chat-food-content">
              <div class="chat-food-header">
                ${vegIcon}
                <span class="chat-food-title" title="${escapeHTML(item.name)}">${escapeHTML(item.name)}</span>
              </div>
              <div class="chat-food-snippet">${escapeHTML(item.description)}</div>
              <div class="chat-food-bottom">
                <span class="chat-food-cost">₹${item.price.toFixed(2)}</span>
                <button class="chat-add-btn" onclick="addFoodFromChat(${item.id}, this)">
                  <span>+ Add</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }
    });
    innerHTML += '</div>';
  }

  if (action) {
    if (action.type === 'open_orders') {
      innerHTML += `<button class="chat-action-btn" onclick="openMyOrdersModal()">${action.label}</button>`;
    } else if (action.type === 'open_auth') {
      innerHTML += `<button class="chat-action-btn" onclick="openAuthModal('login')">${action.label}</button>`;
    } else if (action.type === 'open_cart') {
      innerHTML += `<button class="chat-action-btn" onclick="openCartFromChat()">${action.label}</button>`;
    } else if (action.type === 'open_checkout') {
      innerHTML += `<button class="chat-action-btn" onclick="openCheckoutFromChat()">${action.label}</button>`;
    }
  }

  innerHTML += `<div class="ai-msg-time">${timeStr}</div></div>`;
  row.innerHTML = innerHTML;
  messagesContainer.appendChild(row);
  scrollChatToBottom();
}

function showAITypingIndicator() {
  const messagesContainer = document.getElementById('aiChatMessages');
  if (!messagesContainer) return;

  const row = document.createElement('div');
  row.className = 'ai-msg-row bot';
  row.id = 'aiTypingRow';
  row.innerHTML = `
    <div class="ai-msg-mini-avatar">
      <svg class="chef-bot-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="chef-bot-group">
          <path class="chef-hat-outline" d="M7 12.5C5 12.5 3.5 10.8 3.5 8.8C3.5 7 4.7 5.5 6.4 5.1C7 3 9 1.5 11.4 1.5C12.8 1.5 14 2.1 14.8 3C15.6 2.1 16.8 1.5 18.2 1.5C20.6 1.5 22.6 3 23.2 5.1C24.9 5.5 26.1 7 26.1 8.8C26.1 10.8 24.6 12.5 22.6 12.5H7Z" fill="rgba(0, 255, 136, 0.16)" stroke="#00ff88" stroke-width="1.5" stroke-linejoin="round"/>
          <g class="chef-hat-waves">
            <path class="chef-hat-wave wave-1" d="M9.5 11.5C9.5 9.5 10.5 8 10 6" stroke="#00ff88" stroke-width="1.4" stroke-linecap="round"/>
            <path class="chef-hat-wave wave-2" d="M14.8 11.5C14.8 9 15.4 7.2 14.8 4.2" stroke="#00ff88" stroke-width="1.5" stroke-linecap="round"/>
            <path class="chef-hat-wave wave-3" d="M20.1 11.5C20.1 9.5 19.1 8 19.6 6" stroke="#00ff88" stroke-width="1.4" stroke-linecap="round"/>
          </g>
          <rect class="chef-hat-band" x="6" y="12.5" width="17.6" height="1.8" rx="0.9" fill="#00ff88" opacity="0.9"/>
          <rect class="chef-bot-visor" x="5" y="15" width="19.6" height="10" rx="3.5" fill="rgba(5, 14, 9, 0.92)" stroke="#00ff88" stroke-width="1.5"/>
          <g class="chef-eyes-wrap">
            <circle class="chef-eye-dot eye-left" cx="10.5" cy="20" r="1.6" fill="#00ff88"/>
            <circle class="chef-eye-dot eye-right" cx="19.1" cy="20" r="1.6" fill="#00ff88"/>
          </g>
          <path class="chef-smile" d="M13 22.8C13.8 23.5 15.8 23.5 16.6 22.8" stroke="#00ff88" stroke-width="1.3" stroke-linecap="round"/>
        </g>
      </svg>
    </div>
    <div class="ai-typing-indicator">
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
    </div>
  `;
  messagesContainer.appendChild(row);
  scrollChatToBottom();
}

function hideAITypingIndicator() {
  const indicator = document.getElementById('aiTypingRow');
  if (indicator) indicator.remove();
}

function renderChatChips(chips) {
  const container = document.getElementById('aiChatChips');
  if (!container) return;
  container.innerHTML = '';
  if (!chips || chips.length === 0) return;

  chips.forEach(chipText => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ai-chip';
    btn.textContent = chipText;
    btn.onclick = () => handleChipClick(chipText);
    container.appendChild(btn);
  });
}

function handleChipClick(chipText) {
  if (chipText.includes('Filter Menu to Veg')) {
    filterCategory('Veg');
    toggleAIChat(false);
    const menuSec = document.getElementById('menu');
    if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (chipText === '🛒 Open Cart Drawer' || chipText === '🛒 View Cart' || chipText === '🛒 Open Cart') {
    openCartFromChat();
    return;
  }
  if (chipText === '🚀 Proceed to Checkout' || chipText === '🚀 Open Checkout Modal') {
    openCheckoutFromChat();
    return;
  }
  if (chipText === '📋 View My Orders') {
    openMyOrdersModal();
    return;
  }
  if (chipText === '🔑 Sign In Now') {
    openAuthModal('login');
    return;
  }

  processChatMessage(chipText);
}

function handleAIChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text || isAITyping) return;
  input.value = '';
  processChatMessage(text);
}

function processChatMessage(userText) {
  if (isAITyping) return;
  isAITyping = true;

  renderUserMessage(userText);
  showAITypingIndicator();

  const typingDelay = 550 + Math.min(300, userText.length * 10);

  setTimeout(() => {
    hideAITypingIndicator();
    const response = chefAI.generateResponse(userText);
    renderBotMessage(response.text, response.recommendations, response.action);
    renderChatChips(response.chips);
    isAITyping = false;
  }, typingDelay);
}

function addFoodFromChat(itemId, btnElement) {
  if (typeof updateItemQty === 'function') {
    updateItemQty(itemId, 1, btnElement);
  }
  if (btnElement) {
    btnElement.classList.add('added');
    btnElement.innerHTML = `<span>✓ Added</span>`;
    setTimeout(() => {
      btnElement.classList.remove('added');
      btnElement.innerHTML = `<span>+ Add</span>`;
    }, 1200);
  }
}

function scrollToDishInMenu(itemId) {
  const menuSection = document.getElementById('menu');
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    const card = document.getElementById(`food-card-${itemId}`) || document.querySelector(`[data-item-id="${itemId}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.boxShadow = '0 0 35px rgba(0, 255, 136, 0.8)';
      card.style.borderColor = 'var(--primary)';
      setTimeout(() => {
        card.style.boxShadow = '';
        card.style.borderColor = '';
      }, 2000);
    }
  }, 500);
}

function openCartFromChat() {
  if (window.innerWidth <= 1024) {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar && !sidebar.classList.contains('open')) {
      toggleCartDrawer();
    }
  } else {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
      cartSidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function openCheckoutFromChat() {
  if (typeof openCheckoutModal === 'function') {
    openCheckoutModal();
  }
}

function scrollChatToBottom() {
  const container = document.getElementById('aiChatMessages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
  const isDismissed = sessionStorage.getItem('bitecraft_teaser_dismissed');
  if (!isDismissed) {
    setTimeout(() => {
      const teaser = document.getElementById('aiChatTeaser');
      if (teaser && !isAIChatOpen) {
        teaser.classList.add('show');
      }
    }, 2500);
  }
});

