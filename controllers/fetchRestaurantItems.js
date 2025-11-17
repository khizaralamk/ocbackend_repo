const { restaurantArray } = require('../config/restaurantData');

const fetchRestaurantItems = async (req, res) => {
  try {
    // Optionally support category filtering via query param, e.g. ?category=starter
    // If category is omitted, or set to 'all' or '*', return all items.
    const { category } = req.query;

    let items = restaurantArray;
    const cat = category ? String(category).trim().toLowerCase() : '';

    if (cat && cat !== 'all' && cat !== '*') {
      items = items.filter(i => i.category && i.category.toLowerCase() === cat);
    }

    // Pagination: ?page=1&limit=10 (defaults)
    const pageRaw = req.query.page;
    const limitRaw = req.query.limit;
    const page = Math.max(1, parseInt(pageRaw, 10) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(limitRaw, 10) || 10)); // cap limit at 100

    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const start = (page - 1) * limit;
    const end = start + limit;
    const pagedItems = items.slice(start, end);

    return res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages,
      items: pagedItems,
    });
  } catch (error) {
    console.error('fetchRestaurantItems error', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch restaurant items' });
  }
};

module.exports = { fetchRestaurantItems };
