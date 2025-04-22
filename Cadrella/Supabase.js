const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = 'https://ijhvfampizuvqwjwtyqt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaHZmYW1waXp1dnF3and0eXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjk2MTQsImV4cCI6MjA2MDc0NTYxNH0.vyRMSFf7fAOSAFxilMZipIHqzg-1xbn5OnsZZhk7CaM'
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  // Fetch all rows from a table, e.g., 'catalog'
  const { data, error } = await supabase
    .from('products')
    .select('*');
    let products = data;

  if (error) {
    console.error('Error fetching data:', error.message);
  } else {
    console.log('Products:', products);
  }
})();
