import pandas as pd
import json
import os

# Load the CSV file (replace with your actual file path)
file_path = "events.csv"  # Update this with the path to your CSV file
df = pd.read_csv(file_path)

# Print column names to debug
print("Columns in the CSV file:", df.columns.tolist())

# Strip whitespace from column names
df.columns = df.columns.str.strip()

# Specify the directory where you want to save the JSON file
output_directory = "./"  # Replace with your folder path
output_file = os.path.join(output_directory, "specific_event_details.json")

# Function to fill the event details in the desired format
def generate_event_details(row, index):
    # Check if 'Event Name' is valid before processing
    event_name = row['Event Name'] if pd.notna(row['Event Name']) else "Unnamed Event"

    # Access subcolumns of "Important Info" using their indices
    mode = row[2] if pd.notna(row[2]) else "Not specified"  # Mode
    team_size = row[3] if pd.notna(row[3]) else "Not specified"  # Team Size
    prize_pool = row[5] if pd.notna(row[5]) else "Not specified"  # Prize Pool
    prize_distribution = row[6] if pd.notna(row[6]) else "Not specified"  # Prize Distribution
    timeline = row[7] if pd.notna(row[7]) else "Not specified"  # Timeline
    registration_timeline = row[8] if pd.notna(row[8]) else "Not specified"  # Registration Timeline
    rounds = row[9] if pd.notna(row[9]) else "Not specified"  # Rounds

    # Construct the impInfo field with all subsections, excluding Theme
    imp_info = (
        f"• Mode: {mode}\n"
        f"• Team Size: {team_size}\n"
        f"• Prize Pool: {prize_pool}\n"
        f"• Prize Distribution: {prize_distribution}\n"
        f"• Timeline: {timeline}\n"
        f"• Registration Timeline: {registration_timeline}\n"
        f"• Rounds: {rounds}\n"
    )

    return {
        'route': f"/event_day3/{index + 1}",  # Assuming sequential route generation
        'name': event_name,
        'about': row['About the event'] if pd.notna(row['About the event']) else "Will reveal soon",
        'rules': row['Rules'] if pd.notna(row['Rules']) else "Will reveal soon",
        'impInfo': imp_info,
        'contact': row['Contact'] if pd.notna(row['Contact']) else "Will reveal soon",
        'link': row['Form/Link'] if pd.notna(row['Form/Link']) else "",
        'imageName': event_name.replace(" ", "").lower() if event_name != "Unnamed Event" else ""  # Generate image name or empty if unnamed
    }

# Function to get details for a specific event
def get_event_details(event_name):
    # Filter the DataFrame to find the row for the specified event
    filtered_df = df[df['Event Name'] == event_name]
    
    if filtered_df.empty:
        print(f"Event '{event_name}' not found in the CSV file.")
        return None
    
    # Get the first matching row (assuming unique event names)
    row = filtered_df.iloc[0]
    index = filtered_df.index[0]  # Get the index to maintain sequential route numbering

    # Generate event details for this specific event
    return generate_event_details(row, index)

# Example: Specify the event name you want to retrieve details for
specific_event_name = "Pitching Pixels 2.0"  # Replace with the specific event name you want to fetch

# Get the event details for the specific event
event_details = get_event_details(specific_event_name)

if event_details:
    # Ensure the directory exists, if not create it
    os.makedirs(output_directory, exist_ok=True)

    # Save the specific event detail object as a formatted JSON file
    with open(output_file, 'w') as json_file:
        json.dump(event_details, json_file, indent=2)

    print(f"Event details for '{specific_event_name}' saved to {output_file}")
else:
    print("No event details were saved.")
