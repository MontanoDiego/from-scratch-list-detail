const SUPABASE_URL = 'https://mjwfhlyotmsokgnuhrbi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qd2ZobHlvdG1zb2tnbnVocmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTA4NjQsImV4cCI6MTk4MzY4Njg2NH0.59u5grTqRbWsLqKJ26MiKt2xRJVQ5w3o-GhxYYUQvMA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// grabs all items from supabase
export async function getAllItems() {
    const response = await client.from('zelda-items').select('*');
    
    return response.data;
}

// grabs item ID
export async function getItem(id){
    const response = await client.from('zelda-items').select().match({ id: id }).single();
    return response.data;
}